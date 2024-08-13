import { Router } from "express";
import { createCompany, deleteCompany, getAllCompany, getCompanyId, updateCompany } from "../controllers/companyController.js";

const companyRouter = Router();

companyRouter.post("/companies", createCompany);
companyRouter.get("/companies", getAllCompany);
companyRouter.get("/companies/:id", getCompanyId);
companyRouter.put("/companies/:id", updateCompany);
companyRouter.delete("/companies/:id", deleteCompany);


export { companyRouter };