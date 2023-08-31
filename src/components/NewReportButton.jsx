import React, { useState } from 'react';
import { Fab, Box, Typography, Dialog, DialogActions, Button } from '@mui/material';
import { AddCircleOutlined } from '@mui/icons-material';
import NewReportForm from './NewReportForm';

const NewReportButton = ({ color, label }) => {
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
                    size="medium"
                    color={color}
                    aria-label={label}
                    onClick={handleOpen}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        minWidth: 'auto',
                        px: 2,
                        alignItems: 'center'
                    }}
                >
                    <Box pr={1}><AddCircleOutlined sx={{ fontSize: 30, mt: "8px" }} /></Box>
                    <Typography variant="button" fontFamily="Poppins">Novo Chamado</Typography>
                </Fab>
            </Box>
            <Dialog
                open={open}
                maxWidth="md"
                disableEscapeKeyDown={true}
                onBackdropClick={(e) => e.stopPropagation()}
            >
                <NewReportForm />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default NewReportButton;
