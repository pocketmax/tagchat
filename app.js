var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/:roomId', function (req, res) {
    var name = req.params.roomId;
    res.sendFile(__dirname + '/dist/index.html');
});

var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)

});
