import React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FloatingButton = ({ size = 'medium', color, label, icon: Icon, text }) => {
    return (
        <Box sx={{ position: 'fixed', right: 16, bottom: 16 }}>
            <Fab
                variant="extended"
                size={size}
                color={color}
                aria-label={label}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    minWidth: 'auto',
                    px: 2,
                    alignItems: 'center'
                }}
            >
                {Icon && <Box pr={1}><Icon sx={{fontSize: "40", mt:"8px"}} /></Box>}
                {text && <Typography variant="button">{text}</Typography>}
            </Fab>
        </Box>
    );
};

export default FloatingButton;
