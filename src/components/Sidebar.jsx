import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import {
  HomeOutlined,
  ReportProblemOutlined,
  ChevronRightOutlined,
  Close as CloseIcon
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Reports",
    icon: <ReportProblemOutlined />,
  },
];

const NavList = ({ active, setActive, navigate }) => {
  const theme = useTheme();

  return (
    <List>
      {navItems.map(({ text, icon }) => {
        const lcText = text.toLowerCase();
        return (
          <ListItem
            disablePadding
            key={lcText}
            sx={{
              ":hover": {
                backgroundColor: theme.palette.primary.light,
                "& .MuiListItemButton-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiListItemIcon-root": {
                  color: theme.palette.text.secondary,
                },
              },
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(`/${lcText}`);
                setActive(lcText);
              }}
              sx={{
                backgroundColor:
                  active === lcText
                    ? theme.palette.primary.dark
                    : "transparent",
                color:
                  active === lcText
                    ? theme.palette.primary.contrastText
                    : theme.palette.primary.main,
              }}
            >
              <ListItemIcon
                sx={{
                  ml: "0.5rem",
                  '& .MuiSvgIcon-root': { fontSize: '28px' },
                  color:
                    active === lcText
                      ? theme.palette.primary.contrastText
                      : theme.palette.primary.main,
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ '& .MuiTypography-root': { fontSize: '18px' } }} />
              {active === lcText && (
                <ChevronRightOutlined sx={{ ml: "auto" }} />
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};


const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.contrastText,
              backgroundColor: theme.palette.secondary.main,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 2.5rem">
              <FlexBetween color={theme.palette.secondary.contrastText}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold" align="center">
                    IRT
                  </Typography>
                  <Typography variant="h6" align="center">
                    Incident Reports Tracker
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <CloseIcon />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <NavList active={active} setActive={setActive} navigate={navigate} />
            <Box sx={{ position: 'fixed', left: 16, bottom: 16 }}>
              <Typography variant="caption">Version 0.9</Typography>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
