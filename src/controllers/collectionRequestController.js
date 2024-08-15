import { Collection } from "../models/CollectionRequest.Model.js";
import { Wastes } from "../models/Waste.Model.js";

await Collection.sync();

export const createCollection = async (req, res) => {

  async function checkWasteId(wasteId) {
    const waste = await Collection.findOne({ where: { wasteId } });
    if (!waste) {
      return false;
    }
    return true;
  };

  try {
    const { wasteId, location, quantity} = req.body;
    const companyId = req.user.id;

    if (!wasteId || !location || !quantity) {
      return res.status(400).json({ message: "Fill in all required fields" });
    }

    const waste = await Wastes.findOne({ where: { id: wasteId } });
    if (!waste) {
      return res.status(404).json({ message: "Waste not found" });
    }

    if (await checkWasteId(wasteId)) {
      return res.status(404).json({ message: "This waste is already in a collection" });
    }

    if(waste.companyId !== companyId) {
      return res.status(401).json({ message: "This waste is not from your company" });
    }

    const newCollection = await Collection.create({
      companyId,
      wasteId,
      location,
      quantity
    });
    
    return res.status(201).json({ message: "Request created", newCollection });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateCollectionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const companyIdToken = req.user.id;
  try {
    if (!id || !status) {
      return res
        .status(400)
        .json({ message: "Collection id status are required" });
    }

    const validStatuses = ["Completed", "In Progress", "Pending", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const collection = await Collection.findOne({ where: { id } });

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    if (companyIdToken !== collection.companyId) {
      return res.status(401).json({ message: "You are not authorized to update this collection" });
    }

    const updated = await Collection.update(
      { status },
      {
        where: { id },
      }
    );

    if (updated === 0) {
      return res.status(404).json({ message: "Collection not found" });
    }

    return res
      .status(200)
      .json({ message: "Collection status updated successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.findAll();

    if (collections.length < 1) {
      return res.status(404).json({ message: "No collections found" });
    }

    return res.status(200).json({ collections });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const companyIdToken = req.user.id;

    if (!id) {
      return res.status(400).json({ message: "Collection id is required" });
    }

    const collection = await Collection.findOne({ where: { id } });

    if (companyIdToken !== collection.companyId) {
      return res.status(401).json({ message: "You are not authorized to delete this collection" });
    }

    await Collection.destroy({
      where: { id },
    });

    return res.status(200).json({ message: "Collection deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
