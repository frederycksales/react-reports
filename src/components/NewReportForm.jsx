import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, FormControlLabel, Checkbox, InputLabel, MenuItem, Select } from '@mui/material';
import { AdapterDateFns, LocalizationProvider, DesktopDatePicker } from '@mui/lab';

const NewReportForm = ({ onSubmit: externalOnSubmit }) => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
        if (externalOnSubmit) {
            externalOnSubmit(data);
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Information Title"
                        {...register("informationTitle", { required: "This field is required" })}
                        error={!!errors.informationTitle}
                        helperText={errors.informationTitle?.message}
                    />
                    <TextField
                        fullWidth
                        label="Protocol Number"
                        {...register("protocolNumber", { required: "This field is required" })}
                        error={!!errors.protocolNumber}
                        helperText={errors.protocolNumber?.message}
                    />
                    <TextField
                        fullWidth
                        label="NOC Operator"
                        {...register("nocOperator")}
                    />
                    <TextField
                        fullWidth
                        label="Engineering Team"
                        {...register("engineeringTeam")}
                    />
                    <TextField
                        fullWidth
                        label="Incident Type"
                        {...register("incidentType")}
                    />
                    <TextField
                        fullWidth
                        label="Offender Type"
                        {...register("offenderType")}
                    />
                    <TextField
                        fullWidth
                        label="Circuit Designation"
                        {...register("circuitDesignation")}
                    />
                    <TextField
                        fullWidth
                        label="Customer Impact"
                        {...register("customerImpact")}
                    />
                    <Box mb={2}>
                        <DesktopDatePicker
                            label="Incident Start"
                            inputFormat="dd-MM-yyyy"
                            value={control.watch('incidentStart')}
                            onChange={(date) => setValue('incidentStart', date)}
                            renderInput={(params) => <TextField fullWidth {...params} />}
                        />
                    </Box>
                    {/* ... You can expand this for other fields ... */}
                </Box>

                {/* Add more controls for date, array, and nested objects fields... */}

                <Box mt={2}>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </LocalizationProvider>
    );
};

export default NewReportForm;
