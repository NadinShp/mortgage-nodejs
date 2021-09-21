const {bank: service} = require('../../services');

const getAll = async(req, res, next) => {
        const result = await service.getAll();
        res.json({
            status: 'success',
            code: 200,
            data: {
                result,
            }
        })
};

module.exports = getAll;