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

            var club = team.find('h2 a').text();
            team.each(function () {

                var instance = $$(this).find('#p');
                instance.each(function () {
                    var row = [];
                    var inj = [];
                    var item = $$(this).find('td');
                    row.push(item.text());

                    var injury = new Injury({
                        _id: club,
                        date: row[0],
                        name: row[1],
                        pos: row[2]
                        //TODO
                    })
                });
            });
        }
    });
};
