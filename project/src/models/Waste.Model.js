import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
import { Company } from "./Company.Model.js";

export const Wastes = database.define(
  "Wastes",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Company,
        key: "id"
      }
    },
    contactPhone: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    wastesName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    composition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availableIn: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Date when residue will be available'
    }
  }
);

Company.hasMany(Wastes, { foreignKey: 'companyId' });
Wastes.belongsTo(Company, { foreignKey: 'companyId' });