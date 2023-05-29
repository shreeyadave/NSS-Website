import "./App.css";
import NavBar from "./components/NavBar";
import bg from "./assets/bg.jpg";
import HeroText from "./components/HeroText";
import UpdateCard from "./components/UpdateCard";
import { Stack } from "@mui/material";

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
    </>
  );
}

export default App;
