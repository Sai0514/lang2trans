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
    res.header('Access-Control-Allow-Origin', '*');
    if (req && req.body) {
        let data = req.body;
        let langFrom = data.from ? data.from : 'auto';
        // console.log(data)
        try {
            tjs.translate({
                text: data.text,
                to: data.to,
                api: data.api || 'google'
            }).then(result => {
                console.log(result)
                let valueDst = result && result.result
                res.json(valueDst);
            }).catch(error => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }
});

//allow custom header and CORS
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
        /*让options请求快速返回*/
    } else {
        next();
    }
});

app.listen(3000, function() {
    console.log('Server is listening at port 3000')
});