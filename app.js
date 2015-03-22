/**
 * Created by Sean on 3/21/2015.
 */

var scraper = require('./lib/scrapers/tableScraper');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    scraper.scrape('http://www.livescore.co.uk/soccer/england/premier-league/');
});

module.exports = app;
