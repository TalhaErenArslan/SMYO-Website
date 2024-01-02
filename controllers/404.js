var template = require('../views/template-main');
fs = require('fs'),
    url = require('url'),
    path = require('path'),
    mimeType = {
        '.html': 'text/html',
        '.txt': 'text/plain',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.gif': 'image/gif',
        '.jpg': 'image/jpeg',
        '.png': 'image/x-png',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/png',
        '.blob': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.docx': 'application/msword',
        '.mp4': 'video/mp4',
        '.webm': 'video/webm',
        '.ogg': 'video/ogg',
        '.mp3': 'video/mp3',
        '.avi': 'video/mp3'

    }


exports.get = function (req, res) {
    const u = url.parse(req.url);
    var filename = u.pathname;

    fs.readFile('.' + filename, (err, data) => {
        if (err) {
            res.write(template.build("404 - Page not found", "OOOPPPPPSS!! 404", "<p> looking for the summer...</p>"));
            res.end();
        } else {
            const ext = path.extname(filename);
            res.writeHead(200, { 'Content-Type': mimeType[ext.toLowerCase()] });
            res.write(data);
        }
        res.end();
    });

};