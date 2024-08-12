import { Router } from "express";
import { createCompany, deleteCompany, getAllCompany, getCompayId, updateCompany } from "../controllers/companyController.js";

const companyRouter = Router();

companyRouter.post("/companies", createCompany);
companyRouter.get("/companies", getAllCompany);
companyRouter.get("/companies/:id", getCompayId);
companyRouter.put("/companies/:id", updateCompany);
companyRouter.delete("/companies/:id", deleteCompany);


export { companyRouter };