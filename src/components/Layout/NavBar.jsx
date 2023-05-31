import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Stack,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavDialog from "./NavDialog";

export default function NavBar() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleMenuClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backdropFilter: "blur(10px)", px: 8 }}
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <Stack component="div" sx={{ flexGrow: 1 }}>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: isPhone ? "1.5rem" : "2rem",
                fontWeight: "100",
              }}
            >
              NSS SVNIT
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: isPhone ? "0.8rem" : "0.9rem",
                fontWeight: "400",
              }}
            >
              National Service Scheme
            </div>
          </Stack>
          {isPhone ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleMenuClick} />
            </IconButton>
          ) : (
            <>
              <Button color="inherit">About</Button>
              <Button color="inherit">Events</Button>
              <Button color="inherit">Volunteer</Button>
              <Button color="inherit">Contacts</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <NavDialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
}
