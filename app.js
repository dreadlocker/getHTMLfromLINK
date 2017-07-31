"use strict";

const html = "http://www.imdb.com/search/title?genres=comedy&sort=moviemeter&title_type=feature&year=2013,2013&view=simple&page=2&ref_=adv_nxt",
    request = require("request"),
    { JSDOM } = require("jsdom"),
    dom = new JSDOM(html),
    $ = require("jquery")(dom.window);

request(html, (err, res, body) => {
    $("body").html(body);
    console.log($("body").html());
});