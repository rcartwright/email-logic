var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {
  return fetch('https://api.salesloft.com/v2/people.json?per_page=100', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + process.env.API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((result) => {
      //return res.json(result.data);
      return res.render('index', { people: result.data });
    })
    .catch((err) => {
      console.log('err', err);
      return res.json(err);
    });
});

module.exports = router;
