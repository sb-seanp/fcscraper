/**
 * Created by Sean on 3/19/2015.
 */

var request = require('request');
var cheerio = require('cheerio');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'clubScraper'});
var Club = require('../models/Clubs');

function clubScraper() {

    this.scrape();
}

clubScraper.scrape = function (url) {
    var self = this;

    request(url, function (error, response, html) {
        if(!error) {
            var $$ = cheerio.load(html);
            log.info('URL \'' + url + '\'' + ' requested.');
            //console.log('URL requested\n');

            var instance = $$('table:nth-of-type(2) .trow3');
            if (instance.length > 1) log.info('Query matched.');
            else log.error('Query failed.');

            instance.each(function () {
                var row = [];
                var item = $$(this).find('td');

                item.each(function () {
                    row.push($$(this).text());
                });
                var club = new Club({
                    pos: row[0],
                    _id: row[1],
                    played: row[2],
                    wins: row[3],
                    draws: row[4],
                    losses: row[5],
                    gfor: row[6],
                    gag: row[7],
                    gd: row[8],
                    points: row[9],
                    winsh: row[11],
                    drawsh: row[12],
                    lossesh: row[13],
                    gforh: row[14],
                    gagh: row[15],
                    winsa: row[22],
                    drawsa: row[23],
                    lossesa: row[24],
                    gfora: row[25],
                    gaga: row[26],
                    ppg: row[28],
                    clean: row[30],
                    fail: row[31]
                });
                club.save(function (err) {
                    if (err) log.error('Save failed.'); //console.log('Error');
                });
            });
            log.info('Club scraper success.');
        }
    });
};

module.exports = clubScraper;
