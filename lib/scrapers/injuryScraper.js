/**
 * Created by Sean on 4/27/2015.
 */
var request = require('request');
var cheerio = require('cheerio');
var bunyan = require('bunyan');
/*var log = bunyan.createLogger({
 name: 'clubScraper',
 streams: [{
 path: '/var/log/www/fcscraper.log',
 level: 'debug'
 }]
 });*/
var log = bunyan.createLogger({name: 'injuryScraper'});
var mongoose = require('mongoose');

var model = require('../models/Injury');

function injuryScraper() {

    this.scrape();
}

injuryScraper.scrape = function (url, league) {
    var self = this;
    var Injury = mongoose.model(league, model);

    request(url, function (error, response, html) {
        if (!error) {
            var $$ = cheerio.load(html);

            var team = $$('#team');
            if (team.length <= 1) log.error('Query failed.');

            team.each(function () {

                var club = $$(this).find('h2 a').text();

                var instance = $$(this).find('#p');
                instance.each(function () {
                    var row = [];
                    var reason = '';
                    //TODO
                    var info;
                    info = 'blank';
                    var item = $$(this).find('td a');
                    item.each(function () {
                        if (item.children().length) {
                            var source = item.children().attr('src');
                            if (source == '/img/icons/cross.png') reason = 'injured';
                            else if (source == '/img/icons/x.png') reason = 'return';
                            else if (source == '/img/icons/red.png') reason = 'red';
                            else { reason = 'misc' }
                        }
                        row.push($$(this).text());
                    });
                    if (row[2] == 'S') row[2] = 'F';
                    /*var injury = new Injury({
                        _id: row[1],
                        pos: row[2],
                        club: club,
                        date: row[0],
                        reason: reason,
                        info: info
                    });
                    injury.save(function (err) {
                        if (err) log.error('Save failed.');
                    });*/
                });
            });
        }
        else { log.fatal('Request failed.'); }
    });
};

module.exports = injuryScraper;
