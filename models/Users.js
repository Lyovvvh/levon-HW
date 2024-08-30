import {Model, DataTypes} from "sequelize";

import sequelize from "../clients/sequelize.mysql.js";

import Books from "./Books.js";

class Users extends Model {}

Users.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            // get() {
            //     return undefined;
            // }
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'users',
        tableName: 'users',
        indexes: [
            {
                unique: true,
                fields: ['username'],
            },
        ],

    }

);


Users.hasMany(Books,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "userId",
})

Books.belongsTo(Users)


export default Users;
