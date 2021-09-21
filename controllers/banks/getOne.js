const {bank: service} = require('../../services');

const getOne = async (req, res, next) => {
    const {bankId} = req.params;
        const result = await service.getOne(bankId);
        if(!result) {
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Category with ${bankId} not found`,
            })
        };
        res.json({
            status: 'success',
            code: 200,
            data: {
                result,
            }
        })
};

module.exports = getOne;