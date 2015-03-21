/**
 * Created by Sean on 3/19/2015.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fcscraper');
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

var StatsSchema = new mongoose.Schema({
    name: String,
    possession: String,
    success: String,
    aerials: String,
    shotspg: String,
    otpg: String,
    dribblespg: String,
    fouledpg: String,
    shotsapg: String,
    tacklespg: String,
    intpg: String,
    foulspg: String,
    offpg: String
});

module.exports = mongoose.model('Stats', StatsSchema);