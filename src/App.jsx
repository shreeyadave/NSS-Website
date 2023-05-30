import "./App.css";
import NavBar from "./components/NavBar";
import bg from "./assets/bg.jpg";
import HeroText from "./components/HeroText";
import UpdateCard from "./components/UpdateCard";
import { Box, Stack } from "@mui/material";
import Gallery from "./components/Gallery";
import Counter from "./components/UI/counter";
import Divider from "@mui/material/Divider";
import Memories from "./components/MemoriesText";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})`, height: "100vh" }}>
        <NavBar />
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

      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{
          height: "200px",
          fontFamily: "Poppins",
          fontWeight: "100",
          fontSize: "4rem",
          bgcolor: "#E1F0EE",
          px: 30,
        }}
        alignItems={"center"}
      >
        <Counter start={0} end={200} duration={2} title="Members" />
        <Divider orientation="vertical" variant="middle" flexItem />

        <Counter start={0} end={7} duration={2} title="Trips" />
        <Divider orientation="vertical" variant="middle" flexItem />

        <Counter start={0} end={10} duration={2} title="Activities" />
      </Stack>
      <Stack
        direction={"row"}
        gap={5}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box sx={{ pl: 10 }}>
          <Memories />
        </Box>
        <Gallery />
      </Stack>
      <Footer />
    </>
  );
}

export default App;
