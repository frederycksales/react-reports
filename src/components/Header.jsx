import { Typography, Box } from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";

const Header = ({ title, subtitle, ...props }) => {
  return (
    <Box p={1} {...props}>
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        sx={{ mb: "5px", color: (theme) => theme.palette.text.primary }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: (theme) => theme.palette.text.primary }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Header.defaultProps = {
  subtitle: ''
};

export default Header;
