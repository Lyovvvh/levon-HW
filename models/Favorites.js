import sequelize from "../clients/sequelize.mysql.js";
import {Model, DataTypes} from "sequelize";
import Books from "./Books.js";
import Users from "./Users.js";

class Favorites extends Model {}

Favorites.init(
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
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'favorites',
        tableName: 'favorites',
        indexes: [
            {
                unique: true,
                fields: ['userId', 'bookId'],
            },
        ]
    }
);

Users.hasMany(Favorites, {
    foreignKey: 'userId',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Books.hasMany(Favorites, {
    foreignKey: "bookId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Favorites.belongsTo(Users)

Favorites.belongsTo(Books)


export default Favorites;
