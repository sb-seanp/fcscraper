/**
 * Created by Sean on 3/21/2015.
 */

var scraper = require('./lib/scrapers/clubScraper');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=italy');
});

module.exports = app;
