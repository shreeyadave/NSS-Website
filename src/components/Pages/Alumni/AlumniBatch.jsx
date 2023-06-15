import React from "react";
import { Typography, Grid } from "@mui/material";
import AlumniCard from "./AlumniCard";

// Component for displaying a batch of alumni
const AlumniBatch = ({ year, alumniList }) => {
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: "45px", marginLeft: "60px" }}
      >
        Batch of {year}
      </Typography>
      <Grid
        container
        spacing={5}
        sx={{ mt: "20", px: 8, py: 4 }}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        {alumniList.map((alumni) => (
          <Grid item xs={4} sm={6} md={4} lg={4} key={alumni.name}>
            <AlumniCard {...alumni} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default AlumniBatch;
