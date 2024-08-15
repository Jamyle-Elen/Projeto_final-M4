import { Wastes } from "../models/Waste.Model.js";
import { wasteFilter } from "./wasteFilterController.js";

await Wastes.sync();

function daysToAvailableDate(availableIn) {
  const availableDate = new Date(availableIn);
  const today = new Date();
  const diffInMs = availableDate - today;
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
}

export const createWaste = async (req, res) => {
  try {
    const { contactPhone, wastesName, composition, quantity, location, availableIn } = req.body;
    const companyId = req.user.id;

    if (!companyId || !contactPhone || !wastesName || !composition || !quantity || !location || !availableIn) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (daysToAvailableDate(availableIn) < 0) {
      return res
        .status(400)
        .json({ message: "The available date must be a future date" });
    }

    const newWaste = await Wastes.create({
      companyId,
      contactPhone,
      wastesName,
      composition,
      quantity,
      location,
      availableIn,
    });

    return res
      .status(201)
      .json({ message: "Waste created successfully", newWaste });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllWastes = async (req, res) => {
  try {
    if (Object.keys(req.query).length > 0) {
      return await wasteFilter(req, res);
    }

    const wastes = await Wastes.findAll();

    if (wastes.length < 1)
      return res.status(404).json({ message: "No waste found" });

    return res.status(200).json({ wastes });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWasteById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "Waste ID is required" });

    const waste = await Wastes.findOne({ where: { id } });

    if (!waste) return res.status(404).json({ message: "Waste not found" });

    return res.status(200).json({ waste });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWaste = async (req, res) => {
  try {
    const { id } = req.params;
    const companyIdToken = req.user.id;

    const {
      contactPhone,
      wastesName,
      composition,
      quantity,
      location,
      availableIn,
    } = req.body;

    if (
      !id ||
      !contactPhone ||
      !wastesName ||
      !composition ||
      !quantity ||
      !location ||
      !availableIn
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (daysToAvailableDate(availableIn) < 0) {
      return res
        .status(400)
        .json({ message: "The available date must be a future date" });
    }

    const waste = await Wastes.findOne({ where: { id } });

    if(companyIdToken !== waste.companyId){
      return res.status(401).json({message: "You are not authorized to update this waste"});
    }

    await Wastes.update(
      {
        contactPhone,
        wastesName,
        composition,
        quantity,
        location,
        availableIn,
      },
      {
        where: { id },
      }
    );

    return res.status(200).json({ message: "Waste updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWaste = async (req, res) => {
  try {
    const { id } = req.params;
    const companyIdToken = req.user.id;

    if (!id) return res.status(400).json({ message: "Waste ID is required" });

    const waste = await Wastes.findOne({ where: { id } });

    if(companyIdToken !== waste.companyId){
      return res.status(401).json({message: "You are not authorized to delete this waste"});
    }

    await Wastes.destroy({ where: { id } });

    return res.status(200).json({ message: "Waste deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



