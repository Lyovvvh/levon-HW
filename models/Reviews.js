import {Model, DataTypes} from "sequelize";

import sequelize from "../clients/sequelize.mysql.js";

import Books from "./Books.js";
import Users from "./Users.js";


class Reviews extends Model {}

Reviews.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        bookId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        review: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING(1),
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'reviews',
        tableName: 'reviews',
    }
);

Reviews.belongsTo(Users, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "userId",
})
Reviews.belongsTo(Books, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "bookId",
})


export default Reviews;
