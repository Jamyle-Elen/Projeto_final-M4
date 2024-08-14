import { Router } from "express";
import {createCollection, updateCollectionStatus,getAllCollections} from "../controllers/collectionRequestController.js";

const collectionRouter = Router();

// Rota para atualizar o status da empresa
collectionRouter.post('/collection-request', createCollection);
collectionRouter.patch('/collection/:id/status', updateCollectionStatus);
collectionRouter.get('/collections', getAllCollections);


export {collectionRouter};