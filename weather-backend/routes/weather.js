var express = require('express');
var router = express.Router();
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/* Report weather */
router.get('/', function(req, res, next) {
  fs.readFile('cache.txt', (err, data)=>{
    if(err)
    {
      var weatherRequest = new XMLHttpRequest();
          weatherRequest.open("GET", "");
          weatherRequest.onreadystatechange = function() {
            if (weatherRequest.readyState == 4) {
              if (weatherRequest.status>=200 && weatherRequest.status < 400)
              {
                fs.appendFile('cache.txt', this.responseText, (err)=>{
                  if (err) throw err; 
                  res.send(weatherRequest.responseText);
                });
              }
              else
              res.render('index', { title: 'Service not reachable', status: "Could not retrieve Weather Data."});
              return;
            }
          }
          weatherRequest.send();
    }
    else
    {
      res.send(data.toString('utf8'));
    }
  });
});

module.exports = router;
