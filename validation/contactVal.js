const joi = require("@hapi/joi")
const valSchema = joi.object({
    name :joi.string().required(),
    email: joi.string().email(),
    message : joi.string().required(),
    phone:joi.number()
})

module.exports= valSchema;