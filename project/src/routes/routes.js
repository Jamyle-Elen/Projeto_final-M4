import { Router } from 'express';
import { wastesRouter } from './waste.routes.js';
import { reportsRouter } from './reports.routes.js';
import { companyRouter } from './company.routes.js';
// collection
// import { authRouter } from './auth.routes.js';
// history

const router = Router();

router.use('/wastes', wastesRouter);
router.use('/reports', reportsRouter);
router.use('/companies', companyRouter);
// collection
// router.use('/auth', authRouter);
// history

export default router;