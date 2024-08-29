import sequelize from "../clients/sequelize.mysql.js";
import {Model, DataTypes} from "sequelize";

class Books extends Model {}

Books.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        userId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'books',
        tableName: 'books',
        indexes: [
            {
                unique: true,
                fields: ['title'],
            },
        ]
    }
);


export default Books;
