import React, { useState } from "react";
import { Box,useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import FloatingButton from "../../components/FloatingButton";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="200px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    <Box flexGrow={1}>
      <Navbar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <FloatingButton text="Novo Chamado" size="small" icon={AddCircleOutlinedIcon} label="Add" color="primary"/>
      <Outlet />
    </Box>
  </Box>;
};

export default Layout;