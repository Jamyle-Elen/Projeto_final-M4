import { Router } from "express";
import { createCompany } from "../controllers/companyController.js";

const companyRouter = Router();

companyRouter.post("/companies", createCompany);


export { companyRouter };