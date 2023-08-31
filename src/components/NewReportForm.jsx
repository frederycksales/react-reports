import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	Button,
	Box,
	Grid,
	FormControlLabel,
	Checkbox
} from "@mui/material";
import Header from "../components/Header";
import ReportInformation from "../components/formcomponents/ReportInformation";
import ImpactDetails from "../components/formcomponents/ImpactDetails";
import CarrierInformation from "../components/formcomponents/CarrierInformation";
import InitialReport from "../components/formcomponents/InitialReport";

const NewReportForm = ({ onSubmit: externalOnSubmit }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const [impactOptions, setImpactOptions] = useState({
		isTerceiro: false,
		isBandaLarga: false,
		isDedicados: false,
	});

	const handleCheckboxChange = (field, value) => {
		setImpactOptions(prevState => ({
			...prevState,
			[field]: value,
		}));
	};

	const impactType = watch("impactType", "");

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
			<ReportInformation register={register} errors={errors} />
			{impactType && impactType !== "Nenhum" && (
				<ImpactDetails
					register={register}
					errors={errors}
					impactOptions={impactOptions}
					handleCheckboxChange={handleCheckboxChange}
				/>
			)}
			<Grid item xs={12} px={4}>
				<FormControlLabel
					control={
						<Checkbox
							checked={impactOptions.isTerceiro}
							onChange={(e) => handleCheckboxChange('isTerceiro', e.target.checked)}
							name="isTerceiro"
						/>
					}
					label="Circuito de Terceirros."
				/>
			</Grid>
			{impactOptions.isTerceiro && <CarrierInformation register={register} errors={errors} />}
			<InitialReport register={register} errors={errors} />
			<Box mt={2} px={2}>
				<Button variant="contained" color="primary" type="submit" fullWidth>
					Submit
				</Button>
			</Box>
		</form>
	);
};

export default NewReportForm;