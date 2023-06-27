import React, { useEffect } from "react";
import { Typography, Button, Grow, Grid, Box } from "@mui/material";
import AlumniCard from "./AlumniCard";
import { Link, useParams } from "react-router-dom";
import * as Data from './TeamData';
import Layout from "../../Layout/Layout";

const AlumniBatchPage = () => {
  const { year } = useParams();
  const alumniList = React.useMemo(() => {
    const dataKey = `Team${year}`;
    return Data[dataKey] || [];
  }, [year]);

  const [animateCards, setAnimateCards] = React.useState(false);

  useEffect(() => {
    setAnimateCards(true);
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <Layout>
      <Button
        component={Link}
        to="/team"
        color="inherit"
        size="large"
        style={{ position: "fixed", top: "100px", left: "20px", zIndex: 1000 }}
      >
        Back to Alumni
      </Button>
      <div style={{ overflowX: 'hidden' }}>
      <Grid container justifyContent="center" alignItems="center">
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
      </Grid>

      <Grid container spacing={1} rowSpacing={4} sx={{ marginTop: '20px', marginLeft: '30px', marginBottom: '60px' }} alignItems={"center"} justifyContent={"center"}>
        {alumniList.map((alumni, index) => (
          <Grow
            key={alumni.name}
            in={animateCards}
            timeout={1000 + index * 150}
            style={{ transformOrigin: "150px 168px 0" }}
          >
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
              <Box>
                <AlumniCard {...alumni} />
              </Box>
            </Grid>
          </Grow>
        ))}
      </Grid>
      </div>
    </Layout>
  );
};

export default AlumniBatchPage;
