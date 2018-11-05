var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var { getEmailCharCount } = require('../helpers');

/* GET home page. */
router.get('/', function (req, res, next) {
  return fetch('https://api.salesloft.com/v2/people.json?per_page=25', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + process.env.API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((result) => {
      //return res.json(result.data);
      return res.render('index', {
        people: result.data,
        characterDetails: getEmailCharCount(result.data)
      });
    })
    .catch((err) => {
      console.log('err', err);
      return res.json(err);
    });
});

module.exports = router;
