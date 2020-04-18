var express = require('express');
var router = express.Router();
var WinnerController = require('../controllers/WinnerController.js');

/*
 * GET
 */
router.get('/', WinnerController.list);

/*
 * GET
 */
router.get('/:id', WinnerController.show);

/*
 * POST
 */
router.post('/', WinnerController.create);

/*
 * PUT
 */
router.put('/:id', WinnerController.update);

/*
 * DELETE
 */
router.delete('/:id', WinnerController.remove);

module.exports = router;
