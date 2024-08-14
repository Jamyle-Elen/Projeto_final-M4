import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
import { Wastes } from "./Waste.Model.js"

export const Company = database.define("Company",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        location:{
            type: DataTypes.STRING(200),
            allowNull: false
        },
        capacityStorage:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
