const express = require('express');
const router = express.Router();
const axios = require('axios');
// allows access to dotenv file for api key
require('dotenv').config();
// when true, console logs show up in console.
const verbose = true;
// var stringify = require('json-stringify-safe');
var convert = require('xml-js');
// const xmlparser = require('express-xml-bodyparser');

// GET route template for API request for book search
router.get('/', (req, res) => {
    if (verbose) console.log ('req.params of /books get:', req.params);
    if (verbose) console.log ('req.body of /books get:', req.body);
    axios.get('https://www.goodreads.com/search', {
        params: {
            q: req.body.queryText ,
            key:process.env.GOODREADS_KEY  
        }
    }).then((result) => {
        // if (verbose) console.log('results of /books get:', convert.xml2js(result.data).elements[0].elements[1].elements[6].elements[0].elements[8].elements[1]);
        if (verbose) console.log('results of /books get:', convert.xml2js(result.data).elements[0].elements[1].elements[6]);
        res.send(convert.xml2js(result.data).elements[0].elements[1].elements[6]);
    }).catch( error => {
        if (verbose) console.log('error in /books get request', error);
        res.sendStatus(500);
    })
}) // end GET route

module.exports = router;