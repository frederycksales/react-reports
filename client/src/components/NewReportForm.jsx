import React from 'react'

const NewReportForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
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

export default NewReportForm