import { DataTypes } from "sequelize";
import { database } from "../config/config.js";

export const Company = database.define("Company",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        location:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        wastesId:{
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: "Wastes",
                key: "id"
            }
        },
        capacityStorage:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);
