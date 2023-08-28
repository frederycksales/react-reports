import React, { useState } from 'react';
import { Fab, Box, Typography, Dialog, Alert } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const NewReportButton = ({ size = 'medium', color, label, onClick }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ position: 'fixed', right: 16, bottom: 16 }}>
                <Fab
                    variant="extended"
                    size={size}
                    color={color}
                    aria-label={label}
                    onClick={handleOpen} // alterado para handleOpen em vez de onClick
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        minWidth: 'auto',
                        px: 2,
                        alignItems: 'center'
                    }}
                >
                    <Box pr={1}><AddCircleOutlinedIcon sx={{ fontSize: 30, mt: "8px" }} /></Box>
                    <Typography variant="button" fontFamily="Poppins">Novo Chamado</Typography>
                </Fab>
            </Box>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <Typography>Form Aberto</Typography>
            </Dialog>
        </>
    );
};

export default NewReportButton;
