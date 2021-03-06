/**
 * Created by Sean on 3/21/2015.
 */

var scraper = require('./lib/scrapers/clubScraper');
//var injScraper = require('./lib/scrapers/injuryScraper');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/fcscraper');
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

function runScraper() {
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=england', 'england1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=spain', 'spain1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=germany', 'germany1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=italy', 'italy1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=france', 'france1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=portugal', 'portugal1');
    //injScraper.scrape('http://www.whoout.com/football/premier-league/', 'england1_i');
    //injScraper.scrape('http://www.whoout.com/football/primera-division/', 'spain1_i');
}

module.exports = runScraper();
