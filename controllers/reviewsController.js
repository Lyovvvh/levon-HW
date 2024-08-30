import Books from '../models/Books.js';
import Users from "../models/Users.js";
import Reviews from "../models/Reviews.js";

export default {
    async createReview(req, res) {
        try {
            const { review, rating } = req.body;
            const { id } = req.user;
            const { bookId } = req.query;

            const book = await Books.findOne({
                where: {id: bookId}
            })

            const [param1, param2] = await Reviews.findOrCreate({
                where: {userId: id},
                defaults: {
                    review: review,
                    rating: rating,
                    userId: id,
                    bookId: bookId,
                }
            });

            if (!param2) {
                res.json({
                    message: 'Rating has already been given',
                    book: book,
                    review: param1
                })
            } else {
                res.status(200).send({
                    message: 'Review is created successfully',
                    book: book,
                    user: param1
                })
            }


        }catch (error) {
            res.status(400).json({
                message: "error",
                error: error
            })
        }
    }
}