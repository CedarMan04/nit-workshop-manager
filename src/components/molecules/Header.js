import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky" style={{ boxShadow: "none" }}>
      <Toolbar>
        <Button variant="text" color="inherit">
          <Typography style={{ fontWeight: 700 }} variant="body1">
            Physi-Com. Works
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
