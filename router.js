var url = require('url');
var fs = require('fs');


exports.get = function (req, res) {
    req.requrl = url.parse(req.url, true);
    var url_parse = url.parse(req.url, true);

    var path = req.requrl.pathname;
    if (/.(css)$/.test(path)) {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        fs.readFile(__dirname + path, 'utf8', function (err, data) {
            if (err) throw err;
            res.write(data, 'utf8');
            res.end();
        });
    } else {
        if (path === '/' || path === '/index') {
            require('./controllers/index').get(req, res);
        }
        else
            if (path === '/communicationview.js') {
                require('./controllers/communication').get(req, res);
            }
            else
                if (path === '/hhbview.js') {
                    require('./controllers/hhb').get(req, res);
                }
                else
                    if (path === '/indexview.js') {
                        require('./controllers/index').get(req, res);
                    }
                    else
                        if (path === '/linkview.js') {
                            require('./controllers/link').get(req, res);
                        }
                        else
                            if (path === '/Academicview.js') {
                                require('./controllers/Academic').get(req, res);
                            }
                            else {
                                require('./controllers/404').get(req, res);
                            }
    }
};

