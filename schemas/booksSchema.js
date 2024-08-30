import Joi from 'joi';

export default {
    book: Joi.object({
        title: Joi.string().min(2).alphanum().max(255).required(),
        author: Joi.string().min(2).alphanum().max(255).required(),
        // page: Joi.number().integer().min(0).max(1000).default(1).optional(),
        // limit: Joi.number().integer().min(5).max(20).default(5).optional(),
        // order: Joi.string().valid("asc", "desc").default("desc").optional(),
    }),
    getBooks: Joi.object({
        page: Joi.number().integer().min(0).max(1000).default(1).optional(),
        limit: Joi.number().integer().min(5).max(20).default(5).optional(),
        // order: Joi.string().valid("asc", "desc").default("desc").optional(),
    }),

}