/**
 * Created by Sean on 3/19/2015.
 */

var request = require('request');
var cheerio = require('cheerio');
//var mongoose = require('mongoose');

//var Club = require('../models/Clubs');
var Clubs = require('../models/Clubs');
var Club = Clubs.ClubsOvr;

function tableScraper() {

    this.scrape();
}

tableScraper.scrape = function (url) {
    var self = this;

    request(url, function (error, response, html) {
        if(!error) {
            var $ = cheerio.load(html);
            console.log('URL requested\n');

            var instance = $('.ltable>.row-gray').not('.title');
            instance.each(function () {
                var row = [];
                var item = $(this).find('div');

                item.each(function () {
                    row.push($(this).text());
                });
                var club = new Club({
                    pos: row[0].split(" ")[2],
                    _id: row[1],
                    played: row[2],
                    wins: row[3],
                    draws: row[4],
                    losses: row[5],
                    gfor: row[6],
                    gag: row[7],
                    gd: row[8],
                    points: row[9]
                });
                club.save(function (err) {
                    if (err) console.log('Error');
                });
            });
        }
    });
};

module.exports = tableScraper;