/**
 * Created by darin on 24/7/2015.
 */
'use strict';
var Team = require('./models/team');

module.exports = function (app) {
    app.get('/api/all-teams', function (req, res) {
        Team.find({}, function (err, teams) {
            if (err) {
                throw err;
            }
            res.json(teams);
        });
    });

    app.post('/api/team', function (req, res) {
        if (req.body.teamName != "Default team") {
            Team.create({
                teamName: req.body.teamName,
                playersCount: req.body.playersCount,
                players: req.body.players
            }, function (err, team) {
                if (err) {
                    res.send(err);
                    throw err;
                }
                res.send(team);
            })
        } else {
            res.status(501)
                .send('You can not save default team')
        }
    });

    app.delete('/api/teams:id', function (req, res) {
        Team.remove({
            _id: req.params.id
        }, function (err, team) {
            if (err) {
                res.send(err);
                throw err;
            }
            Team.find({}, function (err, teams) {
                if (err) {
                    throw err;
                }
                res.json(teams);
            });
        });
    });

    app.put('/api/team', function (req, res) {
        if (req.body.teamName != "Default team") {
            Team.findById(req.body._id, function (err, team) {
                if (err) {
                    throw err;
                }

                team.teamName = req.body.teamName;
                team.playersCount = req.body.playersCount;
                team.players = req.body.players;

                team.save(function (err, team) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(team);
                });
            });
        } else {
            res.status(501)
                .send('You can not update default team')
        }
    });

    app.get('/angular-notify.html', function (req, res) {
        console.log(__dirname + '/../public/libs/angular-notify/angular-notify.html');
        res.sendFile(__dirname + '/../public/libs/angular-notify/angular-notify.html');
    });

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });

};