import Joi from 'joi';

export default {
    book: Joi.object({
        title: Joi.string().min(2).alphanum().max(255).required(),
        author: Joi.string().min(2).alphanum().max(255).required(),
    }),

}