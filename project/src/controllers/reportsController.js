import { Wastes } from "../models/Waste.Model.js";
import { Sequelize } from 'sequelize';

export const reports = async (req, res) => {
  try {
    const { companyId } = req.params;

    if (!companyId) return res.status(400).json({ message: "Company ID is required" });

    const allWastes = await Wastes.findAll({
      where: {
        companyId
      }
    });

    const wastes = await Wastes.findAll({
      attributes: [
        'composition', 
        [Sequelize.fn('SUM', Sequelize.col('quantity')), 'totalQuantity'] 
      ],
      group: ['composition'],
      where: {
        companyId
      }
    });

    if (wastes.length < 1) return res.status(404).json({ message: `No waste found with companyId: ${companyId}` });

    //retornar id da empresa, total de registros e os resíduos
    return res.status(200).json({ companyId, "totalRecords": allWastes.length, wastes });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
