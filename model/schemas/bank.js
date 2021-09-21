const {Schema} = require('mongoose');

const bankSchema = Schema({
    name: {
        type: String,
        minlength: [2, 'The minimum bank name length must be two letters'],
        required: [true, 'Set bank name'],
        },
    interestRate: {
        type: Number,
        min: 0.01,
        required: true,
        },
    maximumLoan: {
        type: Number,
        min: 100,
        max: 1000000,
        default: 10000,
        },
    minimumDownPayment: {
        type: Number,
        min: 0.01,
        // default: maximumLoan / 100 * 20,
        },
    loanTerm: {
        type: Number,
        min: 1,
        max: 12,
        default: 12,
        },
    },
    { versionKey: false, timestamps: true },
);
module.exports = bankSchema;