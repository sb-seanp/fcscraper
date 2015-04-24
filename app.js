/**
 * Created by Sean on 3/21/2015.
 */

var scraper = require('./lib/scrapers/clubScraper');
//var updater = require('./lib/scrapers/clubUpdater');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=england', 'england1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=spain', 'spain1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=germany', 'germany1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=italy', 'italy1');
});

module.exports = app;
