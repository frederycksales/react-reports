import { Schema, model } from 'mongoose';

// Novo modelo de dados

const ReportDataSchema = new Schema({
    informTitle: String,
    protocolNumber: {
        type: String,
        match: [/^[0-9]{4}\.[0-9]+$/, 'O protocolo não está no formato válido. Deve ser: 4 números, ponto, pelo menos 1 número após o ponto.'],
        index: true,
    },
    nocOperator: String,
    engineeringTeam: String,
    incidentType: String,
    offenderType: String,
    circuitDesignation: String,
    impactType: String,
    affectedRegions: [String],
    affectedAcessNetwork: [
        {
            lamNumber: Number,
            affectedPon: [
                {
                    ponNumber: Number,
                    isTotalAffected: Boolean
                }
            ]
        }
    ],
    timeDetails: {
        incidentStart: { type: Date, required: true },
        incidentConfirmationTime: { type: Date, required: true },
        incidentEnd: Date,
        initialForecast: Date,
        updatedForecast: Date,
    },
    reports: {
        initialReport: String,
        reportUpdates: [
            {
                newReport: String,
                reportTime: Date
            }
        ],
    },
    incidentAnalysis: {
        rfoDescription: String,
        rootCause: String,
    },
    impactMetrics: {
        broadBand: Number,
        dedicated: Number,
        severity: String,
        totalAffectedCustomers: Number
    },
    carrierInformation: {
        responsibleCarrier: String,
        carrierCircuit: String,
        carrierProtocol: String,
        carrierAttendant: String
    },
    networkintervention: String,
    stats: Boolean
}, {
    timestamps: true
});

// os schemas ou models são referentes as coleções que podem ou não já estar criadas no banco de dados.
const Report = model('reports', ReportDataSchema);

export default Report;