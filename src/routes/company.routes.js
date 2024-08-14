import { Router } from "express";
import { deleteCompany, getAllCompany, getCompanyId, updateCompany } from "../controllers/companyController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const companyRouter = Router();

companyRouter.get("/companies", authenticateToken, getAllCompany);
companyRouter.get("/companies/:id", authenticateToken, getCompanyId);
companyRouter.put("/companies/:id", authenticateToken, updateCompany);
companyRouter.delete("/companies/:id", authenticateToken, deleteCompany);


export { companyRouter };
