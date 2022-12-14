const Joi = require('joi');

const nombre = Joi.string().min(2).max(255);
const email = Joi.string().email();

const createAlumnoSchema = Joi.object({
    nombre : nombre.required(),
    email: email.required()
});

module.exports = {createAlumnoSchema}