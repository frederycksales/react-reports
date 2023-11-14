import Reports from '../models/reportData.js';

export async function getAllReports(req, res) {
    // const reportList = await Reports.find(); // o lean pode ser usado para retornar exatamente como está no mongo, sem o lean irá transformar para usar funções extras do mongoose.
    const reportList = await Reports.find();
    return res.json(reportList);
}
export async function getAllClosedReports(req, res) {
    // const reportList = await Reports.find(); // o lean pode ser usado para retornar exatamente como está no mongo, sem o lean irá transofrmar para usar funções extras do mongoose.
    const reportList = await Reports.find({ stats: true });
    return res.json(reportList);
}
export async function getAllOpenedReports(req, res) {
    // const reportList = await Reports.find(); // o lean pode ser usado para retornar exatamente como está no mongo, sem o lean irá transofrmar para usar funções extras do mongoose.
    const reportList = await Reports.find({ stats: false });
    return res.json(reportList);
}
export async function createReport(req, res) {
    const {
        informTitle, protocolNumber, nocOperator, engineeringTeam, incidentType, offenderType, circuitDesignation, impactType, affectedRegions, affectedAcessNetwork, timeDetails, reports, incidentAnalysis, impactMetrics, carrierInformation, networkintervention, stats
    } = req.body;

    const reportCreated = await Reports.create({
        informTitle,
        protocolNumber,
        nocOperator,
        engineeringTeam,
        incidentType,
        offenderType,
        circuitDesignation,
        impactType,
        affectedRegions,
        affectedAcessNetwork,
        timeDetails,
        reports,
        incidentAnalysis,
        impactMetrics,
        carrierInformation,
        networkintervention,
        stats
    });

    return res.json(reportCreated);
}
export async function deleteRequest(req, res) {
    const { id } = req.params;

    const reportDeleted = await Reports.findByIdAndDelete(id);

    if (reportDeleted) { return res.json(reportDeleted); }
    return res.status(401).json({ error: 'Não foi encontrado o registro para deletar' });
}
export async function updateReport(req, res) {
    const { id } = req.params;
    const { ...updates } = req.body;
    console.log(updates);

    const reportUpdated = await Reports.findByIdAndUpdate(id, updates, { new: true });
    if (reportUpdated) {
        res.status(200).json(reportUpdated);
    } else {
        res.status(404).json({ error: 'Documento não encontrado para realizar o update' });
    }
}