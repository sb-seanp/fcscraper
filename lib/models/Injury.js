/**
 * Created by Sean on 4/27/2015.
 */
var mongoose = require('mongoose');

var InjurySchema = new mongoose.Schema({
    _id: {type: string, trim: true},
    pos: String,
    name: String,
    date: String,
    reason: String,
    info: String
});

module.exports = InjurySchema;
