import { Types } from "mysql2";
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const books = new Sequelize.define (
    "books",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primarykey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        author:{
            type: DataTypes.STRING,
            allowNull: false
        },
        pages:{
            type:DataTypes.NUMBER,
            allowNull: false
        },
        genre:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }
)
