var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var port = process.env.PORT || 3001;

var app = express();

//Middleware===========================>

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//views
app.use(express.static(path.join(__dirname,'./')));

//rendering the html page

app.use('/', function(req, res){
    res.render('./');
});
//=============>End Middleware

app.listen(port, function(){
    console.log('Server starting on Port 3001');
})