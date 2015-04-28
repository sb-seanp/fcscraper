/**
 * Created by Sean on 3/19/2015.
 */

var mongoose = require('mongoose');

var ClubSchema = new mongoose.Schema({
    pos: Number,
    _id: {type: String, trim: true},
    played: Number,
    wins: Number,
    draws: Number,
    losses: Number,
    gfor: Number,
    gag: Number,
    gd: String,
    points: Number,
    winsh: Number,
    drawsh: Number,
    lossesh: Number,
    gforh: Number,
    gagh: Number,
    winsa: Number,
    drawsa: Number,
    lossesa: Number,
    gfora: Number,
    gaga: Number,
    ppg: Number,
    clean: Number,
    fail: Number
});

module.exports = ClubSchema;
