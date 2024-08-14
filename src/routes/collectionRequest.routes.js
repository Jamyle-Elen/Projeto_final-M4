import { Router } from "express";
import {createCollection, updateCollectionStatus} from "../controllers/collectionRequestController.js";

const collectionRouter = Router();

// Rota para atualizar o status da empresa
collectionRouter.post('/collection-request', createCollection);
collectionRouter.patch('/collection/:id/status', updateCollectionStatus);



export {collectionRouter};