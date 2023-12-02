import { Router } from "express";

import {
  createReport,
  updateReport,
  getAllReports,
  getAllOpenedReports,
  getAllClosedReports,
  deleteRequest,
} from "./controllers/ReportsController.js";
import { registerUser, login } from "./controllers/UsersController.js";
import { verifyToken } from "./middleware/auth.js";
const routes = Router();

// Rotas reports
routes.post("/report", createReport);
routes.post("/report/:id", updateReport);
routes.get("/getAllReports", verifyToken, getAllReports);
routes.get("/getAllOpenedReports", getAllOpenedReports);
routes.get("/getAllClosedReports", getAllClosedReports);
routes.delete("/report/:id", deleteRequest);

// Rotas Users
routes.post("/user", registerUser);
routes.post("/login", login);

export default routes;
