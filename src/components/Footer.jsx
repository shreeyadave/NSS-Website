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
        sx={{ fontFamily: "Poppins" }}
        justifyContent={"space-around"}
      >
        <FooterLogo />
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
