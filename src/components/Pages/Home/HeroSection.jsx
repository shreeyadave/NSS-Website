import React from "react";
import { Stack } from "@mui/material";
import HeroText from "../../HeroText";
import bg from "../../../assets/bg.jpg";

import UpdateCard from "../../UpdateCard";

export default function HeroSection() {
  const isPhone = false;
  return (
    <div
      style={{
        paddingTop: 64,
        backgroundImage: `url(${bg})`,
        height: "100vh",
        marginTop: isPhone ? -56 : -64,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ px: 8, pt: 15 }}
        gap={6}
        alignItems={"center"}
      >
        <HeroText />
        <UpdateCard />
      </Stack>
    </div>
  );
}
