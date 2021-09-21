const {model} = require('mongoose');
const {bankSchema} = require('./schemas');

const Bank = model('bank', bankSchema);

module.exports = Bank;

