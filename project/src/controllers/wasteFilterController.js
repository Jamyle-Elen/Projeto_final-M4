import { Wastes } from "../models/Waste.Model.js";
import { Op } from "sequelize";

export const wasteFilter = async (req, res) => {
  try {
    const { composition, location, availableIn, startDate, endDate } = req.query;

    let query = {};

    if (composition) query.composition = composition;
    if (location) query.location = location;
    if (availableIn) {
      query.availableIn = availableIn;
    }

    if (startDate && endDate) {
      query.availableIn = {
        [Op.between]: [startDate, endDate]
      };
    }  

    const filteredWastes = await Wastes.findAll({
      where: query
    });

    if (filteredWastes.length < 1) return res.status(404).json({message: "No waste found"});

    return res.status(200).json({ filteredWastes });
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};