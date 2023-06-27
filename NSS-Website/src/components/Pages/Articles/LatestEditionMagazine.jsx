import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ArticleCard from './ArticleCard';


export default function LatestEdition() {
  return (
    <Box>
      
      <div style={{ fontFamily: "DM Sans", overflowX: "hidden" }}></div>
      <Box
          sx={{
            my: 2,
            px: 8,
            py: 4,
            fontSize: "3rem",
            backgroundColor: "black",
            display: "inline-block",
            fontFamily: "DM Sans",
            color: "grey",
          }}
         >
          Latest{" "}
          <span style={{ fontWeight: 400, color: 'white' }}>
            edition
          </span>
        </Box>
      <br />
      
      
        <Box  style={{ paddingLeft:'80px', paddingRight:'80px', display:'flex',justifyContent:'center'}}><ArticleCard name = {'latest'}></ArticleCard></Box>
      <div/>
    </Box>
    
  );
}