import { Router } from 'express';
import { wastesRouter } from './waste.routes.js';
import { reportsRouter } from './reports.routes.js';
import { companyRouter } from './company.routes.js';
import { collectionRouter } from './collectionRequest.routes.js'; 
import { checkRouter } from './healthCheck.routes.js';
import authRouter from './auth.routes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/', wastesRouter);
router.use('/', reportsRouter);
router.use('/', companyRouter);
router.use('/', collectionRouter);
router.use('/', checkRouter);

export default router;
