const {Schema} = require('mongoose');

const bankSchema = Schema({
    name: {
        type: String,
        minlength: [2, 'The minimum bank name length must be two letters'],
        required: [true, 'Set a bank name'],
        },
    interestRate: {
        type: Number,
        min: 0.01,
        required: [true, 'Interest rate is required']
        },
    maximumLoan: {
        type: Number,
        default: 1000000,
        },
    borrowableAmount: {
        type: Number,
        required: [true, 'Amount is required'],
    },
    minimumDownPayment: {
        type: Number,
        min: 0.01,
        required: [true, 'field "Minimum Down Payment" is required']
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