import { Box, Divider, Grid, List, ListItemButton, Stack } from "@mui/material";
import React from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  const position = [21.1702, 72.8311]; // Coordinates for SVnit location

  const isPhone = false;

  return (
    <footer style={{ backgroundColor: "black", color: "white" }}>
      <Grid
        container
        direction={"column"}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Grid item>
          <FooterLogo />
        </Grid>
<<<<<<< HEAD
        <Grid item lg={1} xs={12} justifySelf={"center"}>
          <ListItem
            sx={{ fontSize: "1.6rem", fontWeight: "bold", color: "white" }}
          >
            SOCIALS
          </ListItem>
          <ListItem>Discord</ListItem>
          <ListItem>Twitter</ListItem>
          <ListItem>Github</ListItem>
          <ListItem>Email</ListItem>
          <ListItem
            sx={{ fontSize: "1.6rem", fontWeight: "bold", color: "white" }}
          ></ListItem>
        </Grid>

        <Grid item lg={1} xs={12}>
          <ListItem
            sx={{ fontSize: "1.6rem", fontWeight: "bold", color: "white" }}
          >
            LINKS
          </ListItem>
          <ListItem>About</ListItem>
          <ListItem>Events</ListItem>
          <ListItem>Gallery</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Alumni</ListItem>
          <ListItem>Articles</ListItem>
        </Grid>
        <Grid item lg={2} xs={12}>
          <ListItem
            sx={{ fontSize: "1.6rem", fontWeight: "bold", color: "white" }}
          >
            WEBSITE
          </ListItem>
          <ListItem>Developers</ListItem>
          <ListItem>Contribute</ListItem>
          <ListItem>Source</ListItem>
          <ListItem
            sx={{ fontSize: "1.6rem", fontWeight: "bold", color: "white" }}
          >
            ADDRESS
          </ListItem>
          <ListItem>
            Ichchhanath Surat- Dumas, Road, Keval Chowk, Surat, Gujarat 395007
          </ListItem>
        </Grid>

        <Grid item lg={3} xs={12}>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
        {/* <Grid item>
=======
        <Grid item>
          <Stack>
>>>>>>> parent of 3d1add0 (redesigned footer)
            <Box>
              <List component="nav" aria-aria-label="main mailbox folders">
                NSS Svnit Surat
                <ListItemButton>About us</ListItemButton>
                <ListItemButton>Meet the team</ListItemButton>
                <ListItemButton>Contact US </ListItemButton>
              </List>
            </Box>

            <Box>
              <List component="nav" aria-aria-label="main mailbox folders">
                COMPANY
                <ListItemButton>About</ListItemButton>
                <ListItemButton>Careers</ListItemButton>
                <ListItemButton>Blog</ListItemButton>
                <ListItemButton>Shop</ListItemButton>
              </List>
            </Box>

            {/* <p
          style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "200" }}
        >
          Made with 💞, by{" "} */}
            {/* <a
            target="blank"
            href="https://barik.super.site"
            style={{
              textDecoration: "none",
              fontFamily: "Arvo",
              fontWeight: "600",
              fontSize: "1.8rem",
              color: "black",
            }}
          >
            barik.
          </a> */}
            {/* </p> */}

            <Box>
              <List component="nav" aria-aria-label="main mailbox folders">
                CONTACT
                <ListItemButton>Discord</ListItemButton>
                <ListItemButton>Twitter</ListItemButton>
                <ListItemButton>Github</ListItemButton>
                <ListItemButton>Email</ListItemButton>
              </List>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
