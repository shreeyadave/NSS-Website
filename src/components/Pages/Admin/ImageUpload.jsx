import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  LinearProgress,
  Select,
  Stack,
} from "@mui/material";
import { FullscreenTwoTone } from "@mui/icons-material";
import { collection, getDocs, setDoc, getDoc, doc } from "@firebase/firestore";
import { firestore, storage } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

export default function ImageUpload() {
  const [foldersList, setFoldersList] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState();
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false); // Track upload progress
  const [progress, setProgress] = useState(0); // Track progress percentage

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    const querySnapshot = await getDocs(collection(firestore, "images"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setFoldersList(newData);
    console.log(newData);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedFolder(event.target.value);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFiles = event.dataTransfer.files;
    console.log(uploadedFiles);
    setFiles(uploadedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleNewFolder = async () => {
    const newFolder = prompt("Enter new folder name");
    if (newFolder) {
      const uuid = uuidv4();
      console.log(uuid);
      console.log(newFolder);
      console.log(foldersList);
      console.log(foldersList.find((folder) => folder.name === newFolder));

      if (foldersList.find((folder) => folder.name === newFolder)) {
        alert("Folder already exists");
      } else {
        setFoldersList((prev) => [...prev, { id: uuid, name: newFolder }]);
        const newFolderDict = { name: newFolder, image_links: [] };
        // setSelectedFolder(newFolderDict);
        await setDoc(doc(firestore, "images", uuid), newFolderDict);
      }
    }
  };

  const handleUpload = async () => {
    try {
      const snapshot = await getDoc(
        doc(firestore, "images", selectedFolder.id)
      );
      if (snapshot.exists()) {
        const data = snapshot.data();
        const imageLinks = Array.from(data.image_links || []);

        setIsUploading(true); // Start uploading
        setProgress(0); // Reset progress

        const uploadPromises = Array.from(files).map((file) => {
          const storageRef = ref(
            storage,
            `/images/${selectedFolder.id}/${file.name}`
          );

          const uploadTask = uploadBytesResumable(storageRef, file);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Track progress
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
            },
            (error) => {
              console.log("Error uploading file:", error);
            }
          );

          return uploadTask.then((snapshot) => {
            return getDownloadURL(snapshot.ref).then((url) => {
              imageLinks.push(url); // Store the download URL
            });
          });
        });

        await Promise.all(uploadPromises);

        // Update the document with the updated imageLinks array
        await setDoc(doc(firestore, "images", selectedFolder.id), {
          image_links: imageLinks,
          name: selectedFolder.name,
        });

        console.log("Upload complete");
      }
    } catch (error) {
      console.log("Error uploading files:", error);
    } finally {
      setIsUploading(false); // Upload completed or failed
      setProgress(0); // Reset progress
    }
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Box
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          sx={{
            border: "1px dashed black",
            width: "50%",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          Drag and drop images here
        </Box>
        <Box>
          {Array.from(files).map((file, id) => (
            <ListItem key={id}>{file.name}</ListItem>
          ))}
        </Box>
      </Stack>

      <FormControl variant="filled" sx={{ m: 1, width: 240 }}>
        <InputLabel id="demo-simple-select-filled-label">Folders</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedFolder}
          label="folders"
          onChange={handleChange}
        >
          {foldersList.map((folder) => (
            <MenuItem key={folder.id} value={folder}>
              {folder.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleNewFolder}>New Folder</Button>
      <Button onClick={handleUpload}>Upload</Button>

      <Dialog open={isUploading} sx={{ fontFamily: "DM Sans" }}>
        <DialogContent>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box width="100%" minWidth={400} mt={4}>
              <Box mb={2}>Uploading Files...</Box>
              <Box mb={2}>
                Progress: {progress}% ({progress}/{files.length})
              </Box>
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
