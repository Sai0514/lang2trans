var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tjs = require('translation.js');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send();
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/translate', function(req, res) {
    if (req && req.body) {
        let data = req.body;
        let langTo = data.to
        let valueDst;
        try {
            tjs.translate(data).then(result => {
                valueDst = result && result.result
                res.send(valueDst)
            }).catch(error => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }
});

app.listen(3000, function() {
    console.log('Server is listening at port 3000')
});