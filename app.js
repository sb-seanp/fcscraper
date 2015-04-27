/**
 * Created by Sean on 3/21/2015.
 */

var scraper = require('./lib/scrapers/clubScraper');

function runScraper() {
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=england', 'england1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=spain', 'spain1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=germany', 'germany1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=italy', 'italy1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=france', 'france1');
    scraper.scrape('http://www.soccerstats.com/widetable.asp?league=portugal', 'portugal1');
}

module.exports = runScraper;
