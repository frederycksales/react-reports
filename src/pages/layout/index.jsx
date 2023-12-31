import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import NewReportButton from "../../components/NewReportButton";

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
      <NewReportButton size="small" label="Add" color="primary" />
      <Outlet />
    </Box>
  </Box>;
};

export default Layout;