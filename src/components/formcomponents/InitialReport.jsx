import React from 'react';
import { Box, Typography, Grid, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const InitialReport = ({ register, errors }) => {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        spacing={1}
        px={3}
        py={2}
      >
        <Box
          px={2}
          sx={{
            borderBottom: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography fontSize={18}>Relato Inicial</Typography>
        </Box>
        <Grid item xs={6} pb={1}>
          <TextField
            fullWidth
            variant="outlined"
            rows={4}
            label="Relato Inicial"
            {...register("initialReport", {
              required: "This field is required",
            })}
            error={!!errors.initialReport}
            helperText={errors.initialReport?.message}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default InitialReport