/**
 * Created by Sean on 3/19/2015.
 */

var request = require('request');
var cheerio = require('cheerio');
var Club = require('mongoose').model('Clubs');

function tableScraper() {
    this.url = 'http://www.whoscored.com/Regions/252/Tournaments/2/Seasons/4311/Stages/9155/Show/England-Premier-League-2014-2015';

    this.scrape();
}

tableScraper.scrape = function () {
    var self = this;

    request(self.url, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
        }

        $('#standings-grid-9155 tbody tr').each(function () {
            var row = [];
            var item = $('td');
            item.each(function () {
                row.push(item.text());
            })
            var club = new Club({
                pos: arr[0],
                name: arr[1],
                played: arr[2],
                wins: arr[3],
                draws: arr[4],
                losses: arr[5],
                gfor: arr[6],
                gag: arr[7],
                points: arr[8]
            });
            club.save(function (err) {
                if (err) return handleError(err);
            });
        });
    });
};

module.exports = tableScraper;