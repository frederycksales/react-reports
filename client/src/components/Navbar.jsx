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
        height: "50px",
      }}
    >
      <Toolbar 
        sx={{
          justifyContent: "space-between",
          height: "25px",
          '&.MuiToolbar-root':{
            minHeight: "50px",
          }
        }}>

        {/* Esquerda */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon sx={{color: theme.palette.primary.main,}}/>
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.primary.light}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            height="25px"
          >
            <InputBase 
              sx={{
                '& .MuiInputBase-input':{
                  '&::placeholder':{
                    color: theme.palette.text.secondary,
                    fontWeight: 'bold',
                    fontFamily: ["Poppins", "sans-serif"].join(","),
                  }
                }
              }}
              placeholder="Pesquisar..." />
            <IconButton>
              <Search sx={{color: theme.palette.primary.dark}} />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/*Direita*/}
        <FlexBetween gap="0.1rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{color: theme.palette.primary.main, fontSize: "20px" }} />
            ) : (
              <LightModeOutlined sx={{color: theme.palette.primary.main, fontSize: "20px" }} />
            )}
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined sx={{color: theme.palette.primary.main, fontSize: "20px" }} />
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{color: theme.palette.primary.main, fontSize: "20px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
