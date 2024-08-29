import sequelize from "../clients/sequelize.mysql.js";
import {Model, DataTypes} from "sequelize";

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
        ]
    }
);


export default Users;
