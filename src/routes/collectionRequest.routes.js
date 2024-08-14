import { Router } from "express";
import {createCollection, updateCollectionStatus,getAllCollections} from "../controllers/collectionRequestController.js";

const collectionRouter = Router();

collectionRouter.post('/collection-request', createCollection);
collectionRouter.patch('/collection/:id/status', updateCollectionStatus);
collectionRouter.get('/collections', getAllCollections);


export {collectionRouter};