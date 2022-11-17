import React from "react";
import Header from "components/molecules/Header";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box>
        {children}
      </Box>
    </>
  );
};

export default Layout
