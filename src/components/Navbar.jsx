import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  NotificationsNoneOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  Tooltip,
} from "@mui/material";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [searchQuery, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleProfileIcoOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileIcoClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  }

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
          '&.MuiToolbar-root': {
            minHeight: "50px",
          }
        }}>

        {/* Esquerda */}
        <FlexBetween>
          <Tooltip title="Menu">
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon sx={{ color: theme.palette.primary.main, }} />
            </IconButton>
          </Tooltip>
          <FlexBetween
            backgroundColor={theme.palette.primary.light}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            height="25px"
          >
            <InputBase
              value={searchQuery}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              sx={{
                '& .MuiInputBase-input': {
                  '&::placeholder': {
                    color: theme.palette.text.secondary,
                    fontWeight: 'bold',
                    fontFamily: ["Poppins", "sans-serif"].join(","),
                  }
                }
              }}
              placeholder="Pesquisar..." />
            <Tooltip title="Pesquisar">
              <IconButton onClick={() => handleSearch()}>
                <Search sx={{ color: theme.palette.text.secondary }} />
              </IconButton>
            </Tooltip>
          </FlexBetween>
        </FlexBetween>

        {/*Direita*/}
        <FlexBetween gap="0.1rem">
          <Tooltip title="Mudar Tema">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ color: theme.palette.primary.main, fontSize: "20px" }} />
              ) : (
                <LightModeOutlined sx={{ color: theme.palette.primary.main, fontSize: "20px" }} />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Notificações">
            <IconButton>
              <NotificationsNoneOutlined sx={{ color: theme.palette.primary.main, fontSize: "20px" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Perfil">
            <IconButton onClick={handleProfileIcoOpen}>
              <PersonOutlined sx={{ color: theme.palette.primary.main, fontSize: "20px" }} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileIcoClose}
            slotProps={{
              paper: {
                elevation: 4,
                sx: {
                  overflowY: 'initial',
                }
              }
            }}
          >
            <MenuItem onClick={handleProfileIcoClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileIcoClose}>Settings</MenuItem>
            <MenuItem onClick={handleProfileIcoClose}>Logout</MenuItem>
          </Menu>

        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
