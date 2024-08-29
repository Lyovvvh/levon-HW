import Joi from 'joi';

export default {
    registration: Joi.object({
        username: Joi.string().min(2).alphanum().max(255).required(),
        password: Joi.string().min(6).alphanum().max(255).required(),
    }),
    login: Joi.object({
        username: Joi.string().min(2).alphanum().max(255).required(),
        password: Joi.string().min(6).alphanum().max(255).required(),
    }),
}