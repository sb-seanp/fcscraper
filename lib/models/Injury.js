/**
 * Created by Sean on 4/27/2015.
 */
var mongoose = require('mongoose');

var InjurySchema = new mongoose.Schema({
    _id: {type: String, trim: true},
    pos: String,
    club: {type: String, trim: true},
    date: String,
    reason: String,
    info: String
});

module.exports = InjurySchema;
