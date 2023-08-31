import { useTheme, Box, Typography, Grid, TextField } from "@mui/material"
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";


const ReportInformation = ({ register, errors }) => {
  const theme = useTheme();

  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    register("incidentStart").onChange(date);
  };

  return (
    <>
      <Box
        px={2}
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography fontSize={18}>Informações do Chamado</Typography>
      </Box>
      <Grid container justifyContent="space-between" spacing={1} px={3} py={2}>
        <Grid conteiner direction="column" xs={6} px={2}>
          <Grid item xs={4} pb={2}>
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
          <Grid item xs={4} pb={2}>
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
          <Grid item xs={4} pb={2}>
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
            
          {/* <Grid item xs={4} pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Início do Incidente"
              {...register("incidentStart", {
                required: "This field is required",
              })}
              error={!!errors.incidentStart}
              helperText={errors.incidentStart?.message}
            />
          </Grid> */}
        </Grid>
        <Grid conteiner direction="column" xs={6} px={2}>
          <Grid item xs={4} pb={2}>
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
          <Grid item xs={4} pb={2}>
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
          <Grid item xs={4} pb={2}>
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
  )
}

export default ReportInformation