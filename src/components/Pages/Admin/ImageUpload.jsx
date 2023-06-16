import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
} from "@mui/material";
import { FullscreenTwoTone } from "@mui/icons-material";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

export default function ImageUpload() {
  const folders = ["Camp 1", "Camp 2", "Camp 3"];
  const [folder, setFolder] = useState("default");
  const [files, setFiles] = useState([]);
  // function to upload images to firebase storage

  const handleChange = (event) => {
    console.log(event.target.value);
    setFolder(event.target.value);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFiles = event.dataTransfer.files;
    uploadedFiles;
    console.log(uploadedFiles);
    setFiles(uploadedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    // Perform upload logic here using the 'files' state variable

    Array.from(files).map((file) => {
      const storageRef = ref(storage, `/images/${folder}/${file.name}`);
      uploadBytesResumable(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
        });
      });
    });
    console.log(files);
  };

  return (
    <div>
      <Box
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        sx={{
          border: "1px dashed black",
          py: "20",
          // textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Drag and drop images here
        {Array.from(files).map((file, id) => (
          <ListItem key={id}>{file.name}</ListItem>
        ))}
        {/* {files[0].name ? files[0].name : "nine"} */}
      </Box>

      <FormControl variant="filled" sx={{ m: 1, width: 240 }}>
        <InputLabel id="demo-simple-select-filled-label">Folders</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={folder}
          label="folders"
          onChange={handleChange}
        >
          {folders.map((folder) => (
            <MenuItem key={folder} value={folder}>
              {folder}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleUpload}>upload</Button>
    </div>
  );
}
