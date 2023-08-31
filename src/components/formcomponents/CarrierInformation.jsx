import React from 'react';
import { Grid, Box, Typography, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const CarrierInformation = ({ register, errors }) => {
  const theme = useTheme();

  return (
    <>
      <Grid item xs={6} px={2} py={1}>
        <Box
          px={2}
          sx={{
            borderBottom: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography fontSize={18}>Informações da Operadora</Typography>
        </Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          px={3}
          py={2}
        >
          <Grid item xs={6} pb={1}>
            <TextField
              fullWidth
              variant="outlined"
              label="Operadora Responsável"
              {...register("responsibleCarrier", {
                required: "This field is required",
              })}
              error={!!errors.responsibleCarrier}
              helperText={errors.responsibleCarrier?.message}
            />
          </Grid>
          <Grid item xs={6} pb={1}>
            <TextField
              fullWidth
              variant="outlined"
              label="Circuito da Operadora"
              {...register("carrierCircuit", {
                required: "This field is required",
              })}
              error={!!errors.carrierCircuit}
              helperText={errors.carrierCircuit?.message}
            />
          </Grid>
          <Grid item xs={6} pb={1}>
            <TextField
              fullWidth
              variant="outlined"
              label="Protocolo da Operadora"
              {...register("carrierProtocol", {
                required: "This field is required",
              })}
              error={!!errors.carrierProtocol}
              helperText={errors.carrierProtocol?.message}
            />
          </Grid>
          <Grid item xs={6} pb={1}>
            <TextField
              fullWidth
              variant="outlined"
              label="Atendente da Operadora"
              {...register("carrierAttendant", {
                required: "This field is required",
              })}
              error={!!errors.carrierAttendant}
              helperText={errors.carrierAttendant?.message}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CarrierInformation