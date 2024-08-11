import { DataTypes } from "sequelize";
import { database } from "../config/config.js";

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
      // references: {
      //   model: "Companies",
      //   key: "id"
      // }
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

const dados = 

{
  id: "b123e456-7e89-12d3-a456-426614174000",
  companyId: "a123e456-7e89-12d3-a456-426614174000",
  wastesName: "Pen Drive",
  composition: "Plastic",
  quantity: "150.75",
  location: "Warehouse A",
  availability: "7 days",
  contact: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890"
  }
}