var GameModel = require('../models/GameModel.js');

/**
 * GameController.js
 *
 * @description :: Server-side logic for managing Games.
 */
module.exports = {

    /**
     * GameController.list()
     */
    list: function (req, res) {
        GameModel.find(function (err, Games) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Game.',
                    error: err
                });
            }
            return res.json(Games);
        });
    },

    /**
     * GameController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        GameModel.findOne({_id: id}, function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Game.',
                    error: err
                });
            }
            if (!Game) {
                return res.status(404).json({
                    message: 'No such Game'
                });
            }
            return res.json(Game);
        });
    },

    /**
     * GameController.create()
     */
    create: function (req, res) {
        var Game = new GameModel({
			players : req.body.players,
			status : req.body.status,
			Winners : req.body.Winners,
			time  : req.body.time 

        });

        Game.save(function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Game',
                    error: err
                });
            }
            return res.status(201).json(Game);
        });
    },

    /**
     * GameController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        GameModel.findOne({_id: id}, function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Game',
                    error: err
                });
            }
            if (!Game) {
                return res.status(404).json({
                    message: 'No such Game'
                });
            }

            Game.players = req.body.players ? req.body.players : Game.players;
			Game.status = req.body.status ? req.body.status : Game.status;
			Game.Winners = req.body.Winners ? req.body.Winners : Game.Winners;
			Game.time  = req.body.time  ? req.body.time  : Game.time ;
			
            Game.save(function (err, Game) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Game.',
                        error: err
                    });
                }

                return res.json(Game);
            });
        });
    },

    /**
     * GameController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        GameModel.findByIdAndRemove(id, function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Game.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
