// const { Bank } = require('../../model');
const {bank: service} = require('../../services');

const update = async(req, res, next) => {
    const {body} = req;
    const {bankId} = req.params;
    try {
        const result = await service.update(bankId, body);
        res.json({
            status: 'success',
            code: 200,
             data : {
                 result,
             }
        })
    } catch (error) {
       next(error);
    }
};

module.exports = update;