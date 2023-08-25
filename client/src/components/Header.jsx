import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box p={1}>
      <Typography
        variant="h2"
        color={theme.palette.text.primary}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.text.primary}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;