const {bank: service} = require('../../services');

const del = async(req, res, next) => {
    const {bankId} = req.params;
    try {
        const result = await service.del(bankId);
        res.json({
            status: 'success',
            code: 200,
            data: {
                result,
            }
        })
    } catch (error) {
        next(error);
    }
};

module.exports = del;