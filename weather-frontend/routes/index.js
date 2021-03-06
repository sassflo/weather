var express = require('express');
var router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let _ping;

/* GET home page. */
router.get('/', function(req, res, next) {
  var weatherRequest = new XMLHttpRequest();
          weatherRequest.open("GET", "http://localhost:3000/weather");
          weatherRequest.onreadystatechange = function() {
            if (weatherRequest.readyState == 4) {
              if (weatherRequest.status>=200 && weatherRequest.status < 400)
              {
                res.render('index', {title: "Weather Report", weather: weatherRequest.responseText});
              }
              else
              res.render('index', { title: 'Service not reachable', status: "Could not retrieve Weather Data."});
              return;
            }
          }
          weatherRequest.send();
  });

module.exports = router;
