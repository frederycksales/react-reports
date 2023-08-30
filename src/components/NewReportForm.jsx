import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import Header from "../components/Header";

const NewReportForm = ({ onSubmit: externalOnSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
        if (externalOnSubmit) {
            externalOnSubmit(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Header title="Abertura de Novo Chamado" />
            <Box mb={2} mx={2}>
                <TextField
                    fullWidth
                    label="Information Title"
                    {...register("informationTitle", { required: "This field is required" })}
                    error={!!errors.informationTitle}
                    helperText={errors.informationTitle?.message}
                />
            </Box>
            <Box mb={2} mx={2}>
                <TextField
                    fullWidth
                    label="Protocol Number"
                    {...register("protocolNumber", { required: "This field is required" })}
                    error={!!errors.protocolNumber}
                    helperText={errors.protocolNumber?.message}
                />
            </Box>
            <Box my={2} mx={2}>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default NewReportForm;