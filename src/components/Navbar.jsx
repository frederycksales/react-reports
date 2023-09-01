import React, { useState, useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import FlexBetween from "./FlexBetween";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  NotificationsNoneOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

const LocaleContext = React.createContext('en');

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [searchQuery, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const locale = useContext(LocaleContext);

  const handleProfileIcoOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileIcoClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleProfile = () => {
    console.log("Navigating to Profile");
  };

  const handleSettings = () => {
    console.log("Navigating to Settings");
  };

  const handleLogout = () => {
    console.log("Logging out");
  };

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
        }}
      >

        {!isMobile && (
          <FlexBetween>
            <Tooltip title="Menu">
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon sx={{ color: theme.palette.primary.main }} />
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
                placeholder={locale === 'pt' ? 'Pesquisar...' : 'Search...'}
              />
              <Tooltip title={locale === 'pt' ? 'Pesquisar' : 'Search'}>
                <IconButton onClick={handleSearch}>
                  <Search sx={{ color: theme.palette.text.secondary }} />
                </IconButton>
              </Tooltip>
            </FlexBetween>
          </FlexBetween>
        )}

        <FlexBetween gap="0.1rem">
          <Tooltip title={locale === 'pt' ? 'Mudar Tema' : 'Switch Theme'}>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ color: theme.palette.primary.main, fontSize: "20px" }} />
              ) : (
                <LightModeOutlined sx={{ color: theme.palette.primary.main, fontSize: "20px" }} />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title={locale === 'pt' ? 'Notificações' : 'Notifications'}>
            <IconButton>
              <NotificationsNoneOutlined sx={{ color: theme.palette.primary.main, fontSize: "20px" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title={locale === 'pt' ? 'Perfil' : 'Profile'}>
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
            <MenuItem onClick={handleProfile}>
              {locale === 'pt' ? 'Perfil' : 'Profile'}
            </MenuItem>
            <MenuItem onClick={handleSettings}>
              {locale === 'pt' ? 'Configurações' : 'Settings'}
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              {locale === 'pt' ? 'Sair' : 'Logout'}
            </MenuItem>
          </Menu>

        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;