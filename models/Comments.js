import sequelize from "../clients/sequelize.mysql.js";
import {Model, DataTypes} from "sequelize";
import Reviews from "./Reviews.js";
import Users from "./Users.js";

class Comments extends Model {}

Comments.init(
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
        reviewId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        comment:{
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'comments',
        tableName: 'comments',
    }
);

Users.hasMany(Comments, {
    foreignKey: 'userId',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Reviews.hasMany(Comments, {
    foreignKey: "reviewId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Comments.belongsTo(Users)

Comments.belongsTo(Reviews)


export default Comments;
