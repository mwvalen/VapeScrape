var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cloudscraper = require('cloudscraper');
var cheerio = require('cheerio');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scrape', function (req, res, next) {

  url = "https://www.directvapor.com/premium-mods/cool-fire-iv-isub-g-starter-kit.html";

  siteMapUrl = "https://www.directvapor.com/sitemap/";

  cloudscraper.get(url, function(error, response, html) {
    if (!error) {


      var $ = cheerio.load(html);

      var productName, price;

      var resultsJson = { productName: "", price: Number};

      $('h1').filter(function() {
        var data = $(this);

        console.log(data.text());

        res.render('index', { title: data.text() });
      })

    }
    else {
      console.log(error);
    }
  })

  //res.render('index', { title: 'NOOB' });
});

module.exports = router;
