import { Router } from 'express';
import { wastesRouter } from './waste.routes.js';
import { reportsRouter } from './reports.routes.js';
import { companyRouter } from './company.routes.js';
import authRouter from './auth.routes.js';
// collection

const router = Router();

router.use('/auth', authRouter);
router.use('/', wastesRouter);
router.use('/', reportsRouter);
router.use('/', companyRouter);
// collection
// history

export default router;
