import { Router } from 'express';
const routes = Router();

import { createReport, updateReport, getAllReports, getAllOpenedReports, getAllClosedReports, deleteRequest } from './controllers/ReportsController.js';

// Rotas reports
routes.post('/report', createReport);
routes.post('/report/:id', updateReport);
routes.get('/getAllReports', getAllReports);
routes.get('/getAllOpenedReports', getAllOpenedReports);
routes.get('/getAllClosedReports', getAllClosedReports);
routes.delete('/report/:id', deleteRequest);

export default routes;
