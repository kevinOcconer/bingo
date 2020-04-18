var PrizesModel = require('../models/PrizesModel.js');

/**
 * PrizesController.js
 *
 * @description :: Server-side logic for managing Prizess.
 */
module.exports = {

    /**
     * PrizesController.list()
     */
    list: function (req, res) {
        PrizesModel.find(function (err, Prizess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Prizes.',
                    error: err
                });
            }
            return res.json(Prizess);
        });
    },

    /**
     * PrizesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PrizesModel.findOne({_id: id}, function (err, Prizes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Prizes.',
                    error: err
                });
            }
            if (!Prizes) {
                return res.status(404).json({
                    message: 'No such Prizes'
                });
            }
            return res.json(Prizes);
        });
    },

    /**
     * PrizesController.create()
     */
    create: function (req, res) {
        var Prizes = new PrizesModel({
			PrizeType : req.body.PrizeType,
			amount : req.body.amount

        });

        Prizes.save(function (err, Prizes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Prizes',
                    error: err
                });
            }
            return res.status(201).json(Prizes);
        });
    },

    /**
     * PrizesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        PrizesModel.findOne({_id: id}, function (err, Prizes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Prizes',
                    error: err
                });
            }
            if (!Prizes) {
                return res.status(404).json({
                    message: 'No such Prizes'
                });
            }

            Prizes.PrizeType = req.body.PrizeType ? req.body.PrizeType : Prizes.PrizeType;
			Prizes.amount = req.body.amount ? req.body.amount : Prizes.amount;
			
            Prizes.save(function (err, Prizes) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Prizes.',
                        error: err
                    });
                }

                return res.json(Prizes);
            });
        });
    },

    /**
     * PrizesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        PrizesModel.findByIdAndRemove(id, function (err, Prizes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Prizes.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
