import Comments from '../models/Comments.js';
import Users from "../models/Users.js";
import Reviews from "../models/Reviews.js";

export default {
    async addComments(req, res) {
        try {
            const {reviewId} = req.query ;
            const {id} = req.user;
            const {comment} = req.body;

            const review = await Reviews.findOne({
                where: {
                    id: reviewId,
                }
            })
            if (review) {
                const comments = await Comments.create({
                    reviewId: reviewId,
                    userId: id,
                    comment: comment
                });

                res.status(200).json({
                    message: "Comments added successfully",
                    comment: comments,
                })
            }else{
                res.status(400).json({
                    message: "Review is not find",
                })
            }

        }catch(err) {
            res.status(500).send({
                message: "server error",
                error: err
            })
        }
    },
    async getComments(req, res) {
        try {
            const {reviewId} = req.query;

            const ifReviewed = await Reviews.findOne({
                where: {
                    id: reviewId,
                }
            })

            if (ifReviewed) {
                const comments = await Comments.findAll({
                    where: {
                        reviewId: reviewId,
                    }
                });
                if(comments.length > 0) {
                    res.status(200).json({
                        message: "review and his comments",
                        comments: comments,
                    })
                }
            }else{
                res.status(400).json({
                    message: "review not found",
                })
            }
        }catch(err) {
            res.status(500).json({
                message: "server error",
                error: err
            })
        }
    }
}