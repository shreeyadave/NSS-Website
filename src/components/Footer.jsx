import { Divider, Stack } from "@mui/material";
import React from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  const position = [21.1702, 72.8311]; // Coordinates for SVnit location

  return (
    <footer style={{ backgroundColor: "#E1F0EE" }}>
      <Stack
        direction="row"
        alignItems={"center"}
        sx={{ fontFamily: "Poppins" }}
        justifyContent={"space-around"}
      >
        <FooterLogo />
        Will remove later
        <p
          style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "200" }}
        >
          Made with 💞, by{" "}
          <a
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
          </a>
        </p>
        Checking for links
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
      </Stack>
    </footer>
  );
};

export default Footer;
