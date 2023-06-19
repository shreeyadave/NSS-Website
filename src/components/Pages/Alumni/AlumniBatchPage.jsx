import React, { useEffect } from "react";
import { Typography, Button, Grow, Grid, Box } from "@mui/material";
import AlumniCard from "./AlumniCard";
import { Link, useParams } from "react-router-dom";
import * as Data from "./AlumniData";
import Layout from "../../Layout/Layout";

const AlumniBatchPage = () => {
  const { year } = useParams();
  const alumniList = React.useMemo(() => {
    if (year === "2019") {
      return Data.alumni2019;
    } else if (year === "2018") {
      return Data.alumni2018;
    }
    // Add more conditions for other years if needed
    return [];
  }, [year]);

  const [animateCards, setAnimateCards] = React.useState(false);

  useEffect(() => {
    setAnimateCards(true);
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          my: "30px",
          px: 6,
          fontFamily: "DM Sans",
          backgroundColor: "#000",
          py: 4,
          color: "grey",
          fontSize: "3rem",
          display: "inline-block",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
          transform: animateCards ? "translateY(0)" : "translateY(20px)",
          opacity: animateCards ? 1 : 0,
        }}
      >
        Team of{" "}
        <span style={{ color: "#fff" }}>
          {""} {year}
        </span>
      </Box>

      <Grid
        container
        sx={{ pl: 10, pr: 6, py: 4 }}
        rowSpacing={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {alumniList.map((alumni, index) => (
          <Grow
            key={alumni.name}
            in={animateCards}
            timeout={1000 + index * 300}
            style={{ transformOrigin: "150px 168px 0" }}
          >
            <Grid item xs={6} sm={6} lg={3}>
              <Box>
                <AlumniCard {...alumni} />
              </Box>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Layout>
  );
};

export default AlumniBatchPage;
