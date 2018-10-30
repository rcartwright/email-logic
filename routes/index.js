var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {
  return fetch('https://api.salesloft.com/v2/people.json', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + process.env.API_KEY,
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log('result', result);
      return res.json(result);
    })
    .catch((err) => {
      console.log('err', err);
      return res.json(err);
    });
});

module.exports = router;
