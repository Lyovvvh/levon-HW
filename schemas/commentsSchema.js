import Joi from 'joi';

export default {
    checkIdReview:Joi.object({
        reviewId:Joi.number().min(1).required(),
    }),
    checkComment:Joi.object({
        comment:Joi.string().min(1).max(255).required(),
    })
}