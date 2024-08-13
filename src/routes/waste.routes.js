import { Router } from "express";
import { createWaste, getAllWastes, getWasteById, updateWaste, deleteWaste } from "../controllers/wasteController.js";

const wastesRouter = Router();

wastesRouter.post("/wastes", createWaste);
wastesRouter.get("/wastes", getAllWastes);
wastesRouter.get("/wastes/:id", getWasteById);
wastesRouter.put("/wastes/:id", updateWaste);
wastesRouter.delete("/wastes/:id", deleteWaste);

export { wastesRouter };