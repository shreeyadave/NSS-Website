import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { Height, WidthFull } from "@mui/icons-material";
import { bg } from "./../../../assets/bg.jpg";

export default function HeadingSection() {
  return (
    <Grid
      container
      spacing={2}
      alignItems={"center"}
      sx={{ px: 8, fontFamily: "DM Sans" }}
    >
      <Grid item xs={6} sm={6} md={6}>
        <Box sx={{ fontSize: "2rem", pl: 1, marginBottom: "-15px" }}>
          Meet Our
        </Box>
        <Box sx={{ fontSize: "5rem" }}>Alumni</Box>
        <Box sx={{ fontSize: "1.1rem", color: "grey" }}>
          Our alumni form an integral part of our community and have achieved
          great success in their respective fields. They are a testament to the
          quality of education and the skills they acquired during their time at
          our institution. Get to know some of our outstanding alumni from
          different batches below.
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <img
          src="src/assets/bg.jpg"
          alt="Right Content"
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
}
