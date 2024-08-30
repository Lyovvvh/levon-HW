import Joi from 'joi';

export default {
    createReview: Joi.object({
        review: Joi.string().min(2).max(255).required(),
        rating: Joi.number().min(1).max(5).required(),
    }),
    checkBookId:Joi.object({
        bookId:Joi.number().min(1).required(),
    })
}