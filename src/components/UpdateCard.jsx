import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";

const UpdateCard = () => {
  const updates = [
    "NSS Recruitment",
    "NSS Orientation",
    "Summer Camp",
    "Winter Camp",
    "Aur bhi kuch kuch",
    "Aur bhi bohot kuch",
  ];

  return (
    <Card
      sx={{
        flexBasis: "30%",
        color: "#CCC",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "10px ",
      }}
      elevation={0}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontFamily: "DM Sans", fontSize: "2rem" }}
          component="div"
        >
          Latest Updates
        </Typography>
        {updates.map((update, index) => (
          <Box
            sx={{ fontFamily: "DM Sans", fontSize: "1.2rem", py: 1.3 }}
            key={index}
          >
            - {update}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default UpdateCard;
