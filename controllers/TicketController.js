var TicketModel = require('../models/TicketModel.js');

/**
 * TicketController.js
 *
 * @description :: Server-side logic for managing Tickets.
 */
module.exports = {

    /**
     * TicketController.list()
     */
    list: function (req, res) {
        TicketModel.find(function (err, Tickets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Ticket.',
                    error: err
                });
            }
            return res.json(Tickets);
        });
    },

    /**
     * TicketController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        TicketModel.findOne({_id: id}, function (err, Ticket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Ticket.',
                    error: err
                });
            }
            if (!Ticket) {
                return res.status(404).json({
                    message: 'No such Ticket'
                });
            }
            return res.json(Ticket);
        });
    },

    /**
     * TicketController.create()
     */
    create: function (req, res) {
        var Ticket = new TicketModel({
			matrix : req.body.matrix

        });

        Ticket.save(function (err, Ticket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Ticket',
                    error: err
                });
            }
            return res.status(201).json(Ticket);
        });
    },

    /**
     * TicketController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        TicketModel.findOne({_id: id}, function (err, Ticket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Ticket',
                    error: err
                });
            }
            if (!Ticket) {
                return res.status(404).json({
                    message: 'No such Ticket'
                });
            }

            Ticket.matrix = req.body.matrix ? req.body.matrix : Ticket.matrix;
			
            Ticket.save(function (err, Ticket) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Ticket.',
                        error: err
                    });
                }

                return res.json(Ticket);
            });
        });
    },

    /**
     * TicketController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        TicketModel.findByIdAndRemove(id, function (err, Ticket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Ticket.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
