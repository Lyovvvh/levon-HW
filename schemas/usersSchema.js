import Joi from 'joi';

export default {
    register: Joi.object({
        firstName: Joi.string().min(2).alphanum().max(100).required(),
        lastName: Joi.string().min(2).alphanum().max(100).required(),
        phoneNumber: Joi.string().min(6).max(30).required(),
        row: Joi.string().min(1) .max(2).required(),
        seat: Joi.string().min(1).max(2).required(),
    }),
}