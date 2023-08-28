import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

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
            <Box m={2}>
                <TextField
                    fullWidth
                    label="Nome do Relatório"
                    {...register("reportName", { required: "Este campo é obrigatório" })}
                    error={!!errors.reportName}
                    helperText={errors.reportName?.message}
                />
            </Box>

            {/* Adicione outros campos conforme necessário */}

            <Box mt={2}>
                <Button variant="contained" color="primary" type="submit">
                    Criar
                </Button>
            </Box>
        </form>
    );
};

export default NewReportForm;
