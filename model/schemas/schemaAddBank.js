const Joi = require('joi');

const schemaAddBank = Joi.object({
    name: Joi.string().min(2).required(),
    interestRate: Joi.number().min(1).required(),
    maximumLoan: Joi.number().min(100).max(1000000),
    minimumDownPayment: Joi.number().min(1),
    loanTerm: Joi.number().min(1).max(12),
    borrowableAmount: Joi.number().min(0.01).required(),
}).min(3);

module.exports = schemaAddBank;