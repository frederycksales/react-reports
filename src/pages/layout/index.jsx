import React, { useState } from "react";
import { Box,useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  
  return <Box 
    sx={{
      width:'100%',
      height:'100%',
  }} 
  >
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  </Box>;
};

export default Layout;