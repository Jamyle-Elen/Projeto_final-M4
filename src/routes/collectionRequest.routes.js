import { Router } from "express";
import {createCollection, updateCollectionStatus,getAllCollections, deleteCollection} from "../controllers/collectionRequestController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const collectionRouter = Router();

collectionRouter.post('/collection-request', authenticateToken, createCollection);
collectionRouter.patch('/collection/:id/status', authenticateToken, updateCollectionStatus);
collectionRouter.get('/collections', authenticateToken, getAllCollections);
collectionRouter.delete('/collection/:id', authenticateToken, deleteCollection);


export {collectionRouter};