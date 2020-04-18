var express = require('express');
var router = express.Router();
var GameController = require('../controllers/GameController.js');

/*
 * GET
 */
router.get('/', GameController.list);

/*
 * GET
 */
router.get('/:id', GameController.show);

/*
 * POST
 */
router.post('/', GameController.create);

/*
 * PUT
 */
router.put('/:id', GameController.update);

/*
 * DELETE
 */
router.delete('/:id', GameController.remove);

module.exports = router;
