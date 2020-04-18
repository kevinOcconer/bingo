var express = require('express');
var router = express.Router();
var PrizesController = require('../controllers/PrizesController.js');

/*
 * GET
 */
router.get('/', PrizesController.list);

/*
 * GET
 */
router.get('/:id', PrizesController.show);

/*
 * POST
 */
router.post('/', PrizesController.create);

/*
 * PUT
 */
router.put('/:id', PrizesController.update);

/*
 * DELETE
 */
router.delete('/:id', PrizesController.remove);

module.exports = router;
