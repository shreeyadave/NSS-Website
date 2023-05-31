import NavBar from "../Layout/NavBar";
import bg from "../../assets/bg.jpg";
import HeroText from "../HeroText";
import UpdateCard from "../UpdateCard";
import { Box, Stack } from "@mui/material";
import GalleryView from "../GalleryView";
import Counter from "../UI/counter";
import Divider from "@mui/material/Divider";
import Memories from "../MemoriesText";
import Footer from "../Layout/Footer";
import Layout from "../Layout/Layout";

function App() {
  const isPhone = false;
  return (
    <>
      <Layout>
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
            py: 5,
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
          <GalleryView />
        </Stack>
      </Layout>
    </>
  );
}

export default App;
