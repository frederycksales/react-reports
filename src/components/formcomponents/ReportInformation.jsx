import { useState } from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import { DateTimeField } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const ReportInformation = ({ register, errors, setValue }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue("incidentStart", date);
  };

  const [error, setError] = useState(null);

  const handleDateError = (err) => {
    if (err) {
      setError("Please select a date-time within the last 4 hours.");
    } else {
      setError(null);
    }
  };

  return (
    <>
      <Box
        px={2}
        sx={{
          borderBottom: "1px solid",
          borderColor: "primary.main",
        }}
      >
        <Typography fontSize={18}>Informações do Chamado</Typography>
      </Box>
      <Grid container justifyContent="space-between" spacing={1} sx={{ px: 3, py: 2 }}>
        <Grid item xs={6} sx={{ px: 2 }}>
          <Grid item pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Protocolo"
              {...register("protocolNumber", {
                required: "This field is required",
              })}
              error={!!errors.protocolNumber}
              helperText={errors.protocolNumber?.message}
            />
          </Grid>
          <Grid item pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Designador do Circuito"
              {...register("circuitDesignation", {
                required: "This field is required",
              })}
              error={!!errors.circuitDesignation}
              helperText={errors.circuitDesignation?.message}
            />
          </Grid>
          <Grid item pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Equipe Atuante"
              {...register("engineeringTeam", {
                required: "This field is required",
              })}
              error={!!errors.engineeringTeam}
              helperText={errors.engineeringTeam?.message}
            />
          </Grid>
          <Grid item pb={2}>
            <DateTimeField
              fullWidth
              variant="outlined"
              ampm={false}
              format="DD/MM/YYYY HH:mm"
              minutesStep={1}
              maxDateTime={dayjs()}
              minDateTime={dayjs().subtract(4, "hour")}
              keyboard={true}
              label="Início do Incidente"
              value={selectedDate}
              onChange={handleDateChange}
              onError={handleDateError}
              helperText={error}
              error={Boolean(error)} 
              onSelectedSectionsChange={() => setSelectedDate(dayjs())}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ px: 2 }}>
          <Grid item pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Tipo de Incidente"
              {...register("incidentType", {
                required: "This field is required",
              })}
              error={!!errors.incidentType}
              helperText={errors.incidentType?.message}
            />
          </Grid>
          <Grid item pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Ofensor do Incidente"
              {...register("offenderType", {
                required: "This field is required",
              })}
              error={!!errors.offenderType}
              helperText={errors.offenderType?.message}
            />
          </Grid>
          <Grid item pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Impacto do Incidente"
              {...register("impactType", {
                required: "This field is required",
              })}
              error={!!errors.impactType}
              helperText={errors.impactType?.message}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ReportInformation;