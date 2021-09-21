const express = require('express');
const {banks: ctrl} = require('../../controllers');
const {validateMiddleware: middl, controllerWrapper} = require('../../middlewares');
const {schemaAddBank} = require('../../model/schemas');

const router = express.Router();

router.post('/', express.json(), middl(schemaAddBank), ctrl.add);

router.get('/', controllerWrapper(ctrl.getAll));

router.get('/:bankId', controllerWrapper(ctrl.getOne));

router.put('/:bankId', express.json(), middl(schemaAddBank), ctrl.update);

router.delete('/:bankId', express.json(), ctrl.del);

module.exports = router;