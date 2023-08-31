import React from 'react';
import { Grid, Box, Typography, FormControlLabel, Checkbox, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ImpactDetails = ({ register, errors, impactOptions, handleCheckboxChange }) => {
  const theme = useTheme();

  const isBandaLarga = impactOptions?.isBandaLarga;
  const isDedicados = impactOptions?.isDedicados;

  return (
    <>
      <Grid item xs={6} px={2} py={1}>
        <Box
          px={2}
          sx={{
            borderBottom: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography fontSize={18}>Detalhes do Impacto</Typography>
        </Box>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          px={3}
          py={2}
        >
          <Grid item xs={12} px={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isBandaLarga}
                  onChange={(e) => handleCheckboxChange('isBandaLarga', e.target.checked)}
                  name="isBandaLarga"
                />
              }
              label="Impacto cliente Banda Larga (BL)"
            />
          </Grid>

          {isBandaLarga && (
            <Grid item xs={4} pb={1}>
              <TextField
                fullWidth
                variant="outlined"
                label="Clientes Banda Larga afetados"
                {...register("broadBand", {
                  required: "This field is required",
                })}
                error={!!errors.broadBand}
                helperText={errors.broadBand?.message}
              />
            </Grid>
          )}

          <Grid item xs={12} px={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isDedicados}
                  onChange={(e) => handleCheckboxChange('isDedicados', e.target.checked)}
                  name="isDedicados"
                />
              }
              label="Impacto cliente Dedicados (B2B)"
            />
          </Grid>

          {isDedicados && (
            <Grid item xs={4} pb={1}>
              <TextField
                fullWidth
                variant="outlined"
                label="Clientes Dedicados afetados"
                {...register("dedicated", {
                  required: "This field is required",
                })}
                error={!!errors.dedicated}
                helperText={errors.dedicated?.message}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ImpactDetails