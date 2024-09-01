import Favorites from '../models/Favorites.js';
import Users from "../models/Users.js";
import Reviews from "../models/Reviews.js";

export default {
    async addToFavorites(req, res) {
        const {bookId} = req.query;
        const {id} = req.user

        const [param1, param2] = await Favorites.findOrCreate({
            where: {
                userId: id,
                bookId: bookId,
            },
            userId: id,
            bookId: bookId,
        })

        if (!param2) {
            res.json({
                message: 'favorite already exists',
                user: param1
            })
        } else {
            res.status(200).send({
                message: 'Favorite is add successfully',
                user: param1
            })
        }
    },
    async getFavorites(req, res) {
        try {
            const {id} = req.user;
            const favorites =  await Favorites.findAll({
                where:{
                    userId: id,
                }
            })
            if(favorites.length > 0) {
                res.status(200).json({
                    favorites: favorites,
                })
            }else{
                res.status(400).send({
                    message: "Dont have favorites",
                })
            }

        }catch (error) {
            res.status(400).json({
                message: "server error",
                error: error
            })
        }
    }
}