import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
import { Wastes } from "./Waste.Model.js"
import { Company } from "./Company.Model.js";

export const Collection = database.define("Collection",
{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    
    companyId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Company,
          key: "id"
        }},

        
    wasteId:{
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Wastes,
        key: "id"
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    status: {
        type: DataTypes.ENUM('Pending', 'In Progress', 'Completed', 'Cancelled'),
        default: 'Pending',
        allowNull: false,
    },

    location:{
        type: DataTypes.STRING(200),
        allowNull: false
    }
}}
);
