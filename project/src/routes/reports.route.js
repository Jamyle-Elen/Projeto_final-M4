import { Router } from "express";
import { reports } from "../controllers/reportsController.js";

const reportsRouter = Router();

reportsRouter.get("/reports/:companyId", reports);

export { reportsRouter };