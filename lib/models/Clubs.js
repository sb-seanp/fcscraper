/**
 * Created by Sean on 3/19/2015.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fcscraper');
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

var ClubsSchema = new mongoose.Schema({
    name: String,
    pos: Number,
    played: Number,
    wins: Number,
    draws: Number,
    losses: Number,
    gfor: Number,
    gag: Number,
    points: Number
});

module.exports = mongoose.model('Clubs', ClubsSchema);