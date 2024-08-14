import { Router } from "express";
import { createWaste, getAllWastes, getWasteById, updateWaste, deleteWaste } from "../controllers/wasteController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const wastesRouter = Router();

wastesRouter.post("/wastes", authenticateToken, createWaste);
wastesRouter.get("/wastes", authenticateToken, getAllWastes);
wastesRouter.get("/wastes/:id", authenticateToken, getWasteById);
wastesRouter.put("/wastes/:id", authenticateToken, updateWaste);
wastesRouter.delete("/wastes/:id", authenticateToken, deleteWaste);

export { wastesRouter };
