import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { FullscreenTwoTone } from "@mui/icons-material";
import { collection, getDocs, getDoc, setDoc, doc } from "@firebase/firestore";
import { firestore, storage } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

export default function ImageUpload() {
  const [foldersList, setFoldersList] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [files, setFiles] = useState([]);

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
    const selectedFolderId = event.target.value;
    const selectedFolderData = foldersList.find(
      (folder) => folder.id === selectedFolderId
    );
    setSelectedFolder(selectedFolderData);
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
        setFoldersList((prev) => [
          ...prev,
          { id: uuid, name: newFolder, image_links: [] },
        ]);
        const newFolderDict = { name: newFolder, image_links: [] };
        await setDoc(doc(firestore, "images", uuid), newFolderDict);
        // console.log(p);
      }
    }
  };

  const handleUpload = async () => {
    try {
      // Upload to the latest snapshot of the folder
      const snapshot = await getDoc(
        doc(firestore, "images", selectedFolder.id)
      );
      if (snapshot.exists()) {
        const data = snapshot.data();
        const imageLinks = Array.from(data.image_links || []);

        // Upload each file and update the image_links array
        const uploadPromises = Array.from(files).map((file) => {
          const storageRef = ref(
            storage,
            `/images/${selectedFolder.name}/${file.name}`
          );

          return uploadBytesResumable(storageRef, file).then((snapshot) => {
            return getDownloadURL(snapshot.ref).then((url) => {
              imageLinks.push(url);
            });
          });
        });

        // Wait for all uploads to complete
        await Promise.all(uploadPromises);

        // Update the document with the updated image_links array
        await setDoc(doc(firestore, "images", selectedFolder.id), {
          image_links: imageLinks,
          name: selectedFolder.name,
        });

        console.log("Upload complete");
      }
    } catch (error) {
      console.log("Error uploading files:", error);
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
          value={selectedFolder ? selectedFolder.id : ""}
          label="folders"
          onChange={handleChange}
        >
          {foldersList.map((folder) => (
            <MenuItem key={folder.id} value={folder.id}>
              {folder.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleNewFolder}>New Folder</Button>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}
