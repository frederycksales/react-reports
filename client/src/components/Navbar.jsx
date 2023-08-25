import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  NotificationsNoneOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

const Navbar = ({isSidebarOpen,setIsSidebarOpen}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: theme.palette.secondary.main,
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Esquerda */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon sx={{color: theme.palette.secondary.contrastText,}}/>
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.primary.light}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Pesquisar..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/*Direita*/}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{color: theme.palette.secondary.contrastText, fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{color: theme.palette.secondary.contrastText, fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined sx={{color: theme.palette.secondary.contrastText, fontSize: "25px" }} />
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{color: theme.palette.secondary.contrastText, fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
