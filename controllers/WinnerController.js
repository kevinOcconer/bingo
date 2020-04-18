var WinnerModel = require('../models/WinnerModel.js');

/**
 * WinnerController.js
 *
 * @description :: Server-side logic for managing Winners.
 */
module.exports = {

    /**
     * WinnerController.list()
     */
    list: function (req, res) {
        WinnerModel.find(function (err, Winners) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Winner.',
                    error: err
                });
            }
            return res.json(Winners);
        });
    },

    /**
     * WinnerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        WinnerModel.findOne({_id: id}, function (err, Winner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Winner.',
                    error: err
                });
            }
            if (!Winner) {
                return res.status(404).json({
                    message: 'No such Winner'
                });
            }
            return res.json(Winner);
        });
    },

    /**
     * WinnerController.create()
     */
    create: function (req, res) {
        var Winner = new WinnerModel({
			player : req.body.player,
			type : req.body.type

        });

        Winner.save(function (err, Winner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Winner',
                    error: err
                });
            }
            return res.status(201).json(Winner);
        });
    },

    /**
     * WinnerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        WinnerModel.findOne({_id: id}, function (err, Winner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Winner',
                    error: err
                });
            }
            if (!Winner) {
                return res.status(404).json({
                    message: 'No such Winner'
                });
            }

            Winner.player = req.body.player ? req.body.player : Winner.player;
			Winner.type = req.body.type ? req.body.type : Winner.type;
			
            Winner.save(function (err, Winner) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Winner.',
                        error: err
                    });
                }

                return res.json(Winner);
            });
        });
    },

    /**
     * WinnerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        WinnerModel.findByIdAndRemove(id, function (err, Winner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Winner.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
