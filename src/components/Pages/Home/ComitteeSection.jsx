import React from "react";
import { Stack, Box } from "@mui/material";
import ComitteeCard from "./CommitteeCard";
import { motion } from "framer-motion";

const ComitteeSection = () => {
  const comittees = [
    "Technical",
    "Sports",
    "Social",
    "Finance",
    "Documentation",
    "Creative",
  ];
  return (
    <Stack>
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
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <ComitteeCard title={title} />
            </motion.div>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ComitteeSection;
