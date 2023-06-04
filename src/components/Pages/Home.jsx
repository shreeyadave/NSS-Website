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
import { motion } from "framer-motion";
import CommitteeCard from "../UI/CommitteeCard";
import ImageGrid from "../UI/ImageGrid";

function App() {
  const comittees = [
    "Technical",
    "Sports",
    "Social",
    "Finance",
    "Documentation",
    "Creative",
  ];
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
          direction={isPhone ? "column" : "row"}
          justifyContent={"space-around"}
          sx={{
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Box sx={{ pl: 10 }}>
              <Memories />
            </Box>
          </motion.div>
          <GalleryView />
        </Stack>
        <Box
          sx={{
            fontFamily: "DM Sans",
            fontSize: "4rem",
            px: 8,
          }}
        >
          Our Comittees
        </Box>
        <Stack direction="row" gap={2} sx={{ px: 8, py: 4 }}>
          {comittees.map((title, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: (index + 1) * 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <CommitteeCard title={title} />
              </motion.div>
            );
          })}
        </Stack>
        <Box
          sx={{
            // textAlign: "center",
            bgcolor: "black",
            color: "white",
            fontFamily: "DM Sans",
            fontSize: "4rem",
            px: 8,
            pt: 2,
          }}
        >
          What we do ?
        </Box>
        <Box
          sx={{
            // textAlign: "center",
            bgcolor: "black",
            color: "white",
            fontFamily: "DM Sans",
            fontSize: "1.2rem",
            px: 8,
            py: 2,
          }}
        >
          Spreading happiness through community service has been one of the
          primary objectives of NSS. With innovative activities across the
          departments catering to all classes of the campus residents, we try to
          create small, happy and memorable moments in their lives. We aim to
          bring about a positive change in the society with focus on education
          and development.
        </Box>

        <Stack sx={{ bgcolor: "black" }}>
          <ImageGrid />
        </Stack>
      </Layout>
    </>
  );
}

export default App;
