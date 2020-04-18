var express = require('express');
var router = express.Router();
var TicketController = require('../controllers/TicketController.js');

/*
 * GET
 */
router.get('/', TicketController.list);

/*
 * GET
 */
router.get('/:id', TicketController.show);

/*
 * POST
 */
router.post('/', TicketController.create);

/*
 * PUT
 */
router.put('/:id', TicketController.update);

/*
 * DELETE
 */
router.delete('/:id', TicketController.remove);

module.exports = router;
