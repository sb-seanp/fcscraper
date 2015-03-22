/**
 * Created by Sean on 3/19/2015.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fcscraper');
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

var ClubsOverallSchema = new mongoose.Schema({
    _id: String,
    pos: Number,
    played: Number,
    wins: Number,
    draws: Number,
    losses: Number,
    gfor: Number,
    gag: Number,
    gd: String,
    points: Number
});

var ClubsHASchema = new mongoose.Schema({
    _id: String,
    wins: String,
    draws: String,
    losses: String,
    gfor: String,
    gag: String
});

module.exports = {
    ClubsOvr: mongoose.model('ClubsOvr', ClubsOverallSchema),
    ClubsHome: mongoose.model('ClubsHome', ClubsHASchema),
    ClubsAway: mongoose.model('ClubsAway', ClubsHASchema)
};
