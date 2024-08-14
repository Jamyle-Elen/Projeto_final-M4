import { Router } from 'express';
import { createCompany } from '../controllers/companyController.js';
import { loginCompany } from '../controllers/loginController.js';

const authRouter = Router();

authRouter.post('/register', createCompany);
authRouter.post('/login', loginCompany);

export default authRouter;
