import { Router } from "express";
import { reports } from "../controllers/reportsController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const reportsRouter = Router();

reportsRouter.get("/reports/:companyId", authenticateToken, reports);

export { reportsRouter };
