const qs = require('querystring');
var url = require('url');
var fs = require('fs');
const path = require('path');
var template = require('../views/Academicview');
var per_data = require('../model/Academic-data');
// const CHandler = require('../lib/CookieHandler.js');

exports.get = function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(template.Academicview());
    response.end();

};