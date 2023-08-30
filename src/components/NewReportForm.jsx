import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Button, Box, Typography, useTheme, FormControlLabel, Checkbox } from '@mui/material';
import Header from "../components/Header";

const NewReportForm = ({ onSubmit: externalOnSubmit }) => {
    const [isTerceiro, setIsTerceiro] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const theme = useTheme();

    const handleFormSubmit = (data) => {
        console.log(data);
        if (externalOnSubmit) {
            externalOnSubmit(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Box mb={2}>
                <Header title="Abertura de Novo Chamado" align="center" />
            </Box>
            <Box px={2}
                sx={{
                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                }}
            >
                <Typography fontSize={18}>
                    Informações do Chamado
                </Typography>
            </Box>
            <Grid container justifyContent="space-between"  spacing={1} px={3} py={2}>
                <Grid item direction="column" xs={6} px={2}>
                    <Grid item xs={4} pb={2}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label="Protocolo"
                            {...register("protocolNumber", { required: "This field is required" })}
                            error={!!errors.protocolNumber}
                            helperText={errors.protocolNumber?.message}
                        />
                    </Grid>
                    <Grid item xs={4} pb={2}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label="Designador do Circuito"
                            {...register("circuitDesignation", { required: "This field is required" })}
                            error={!!errors.circuitDesignation}
                            helperText={errors.circuitDesignation?.message}
                        />
                    </Grid>
                    <Grid item xs={4} pb={2}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label="Equipe Atuante"
                            {...register("engineeringTeam", { required: "This field is required" })}
                            error={!!errors.engineeringTeam}
                            helperText={errors.engineeringTeam?.message}
                        />
                    </Grid>
                    <Grid item xs={4} pb={2}>
                        <TextField
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type='datetime-local'
                            variant='outlined'
                            label="Início do Incidente"
                            {...register("incidentStart", { required: "This field is required" })}
                            error={!!errors.incidentStart}
                            helperText={errors.incidentStart?.message}
                            sx={(theme) => ({
                                '& input[type="datetime-local"]::-webkit-calendar-picker-indicator': {
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: '50%',
                                },
                                '& input[type="datetime-local"]': {
                                    color: "transparent",
                                    '&:focus': {
                                        color: theme.palette.text.primary,
                                    },
                                    '&:valid': {
                                        color: theme.palette.text.primary,
                                    }
                                }
                            })}
                        />
                    </Grid>
                </Grid>
                <Grid item direction="column" xs={6} px={2}>
                    <Grid item xs={4} pb={2}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label="Tipo de Incidente"
                            {...register("incidentType", { required: "This field is required" })}
                            error={!!errors.incidentType}
                            helperText={errors.incidentType?.message}
                        />
                    </Grid>
                    <Grid item xs={4} pb={2}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label="Ofensor do Incidente"
                            {...register("offenderType", { required: "This field is required" })}
                            error={!!errors.offenderType}
                            helperText={errors.offenderType?.message}
                        />
                    </Grid>
                    <Grid item xs={4} pb={2}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label="Impacto do Incidente"
                            {...register("impactType", { required: "This field is required" })}
                            error={!!errors.impactType}
                            helperText={errors.impactType?.message}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} px={4}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isTerceiro}
                            onChange={e => setIsTerceiro(e.target.checked)}
                            name="isTerceiro"
                        />
                    }
                    label="Circuito de Terceirros."
                />
            </Grid>
            {isTerceiro && (
                <Grid item spacing={2} xs={6} px={2} py={1}>
                    <Box px={2}
                        sx={{
                            borderBottom: `1px solid ${theme.palette.primary.main}`,
                        }}
                    >
                        <Typography fontSize={18}>
                            Informações da Operadora
                        </Typography>
                    </Box>
                    <Grid container justifyContent="space-between" alignItems="center" spacing={1} px={3} py={2}>
                        <Grid item xs={6} spacing={2}pb={1}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label="Operadora Responsável"
                                {...register("responsibleCarrier", { required: "This field is required" })}
                                error={!!errors.responsibleCarrier}
                                helperText={errors.responsibleCarrier?.message}
                            />
                        </Grid>
                        <Grid item xs={6} pb={1}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label="Circuito da Operadora"
                                {...register("carrierCircuit", { required: "This field is required" })}
                                error={!!errors.carrierCircuit}
                                helperText={errors.carrierCircuit?.message}
                            />
                        </Grid>
                        <Grid item xs={6} pb={1}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label="Protocolo da Operadora"
                                {...register("carrierProtocol", { required: "This field is required" })}
                                error={!!errors.carrierProtocol}
                                helperText={errors.carrierProtocol?.message}
                            />
                        </Grid>
                        <Grid item xs={6} pb={1}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label="Atendente da Operadora"
                                {...register("carrierAttendant", { required: "This field is required" })}
                                error={!!errors.carrierAttendant}
                                helperText={errors.carrierAttendant?.message}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            )}
            <Box mt={2} px={2}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default NewReportForm;