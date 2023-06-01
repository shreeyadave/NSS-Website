import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";

export default function BlogCard() {
  return (
    <Card sx={{ display: "flex", mx: 10, my: 4, boxShadow: 5 }}>
      <CardActionArea>
        <Stack direction="row">
          <CardMedia
            component="img"
            sx={{ fontFamily: "DM Sans", width: "400px" }}
            image="https://images.pexels.com/photos/269809/pexels-photo-269809.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="green iguana"
          />
          <CardContent>
            <Stack direction="column" gap={2}>
              <Typography
                gutterBottom
                sx={{ fontFamily: "DM Sans", fontSize: "2rem" }}
                variant="h5"
                component="div"
              >
                NSS Wintercamp
              </Typography>
              <Typography
                variant="body"
                sx={{ fontFamily: "Poppins", fontSize: "1.1rem" }}
                color="text.secondary"
              >
                Step into a world of wonder and adventure as we invite you to
                join our enchanting Winter Camp. Embrace the magic of the winter
                season and create lifelong memories in a cozy and vibrant
                atmosphere. Our Winter Camp offers an unforgettable experience
                filled with exciting activities, heartwarming moments, and
                opportunities for personal growth. Get ready to embark on a
                journey that will leave you with cherished stories to share for
                years to come.
              </Typography>
              <Button
                color="primary"
                style={{
                  borderRadius: 0,
                  height: "40px",
                  marginTop: "1rem",
                  color: "black",
                  width: "150px",
                  border: "2px black solid",
                  fontSize: "1.1rem",
                  fontFamily: "DM Sans",
                }}
              >
                READ MORE
              </Button>
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
