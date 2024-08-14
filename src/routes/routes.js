import { Router } from 'express';
import { wastesRouter } from './waste.routes.js';
import { reportsRouter } from './reports.routes.js';
import { companyRouter } from './company.routes.js';
import { checkRouter } from './healthCheck.routes.js';
// collection
// import { authRouter } from './auth.routes.js';
// history

const router = Router();

router.use('/', wastesRouter);
router.use('/', reportsRouter);
router.use('/', companyRouter);
router.use('/', checkRouter);
// collection
// router.use('/auth', authRouter);
// history

export default router;
