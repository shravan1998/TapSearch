const express = require("express");
const path = require("path");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/'));

app.get('/',function(req,res){
    res.render('index');
});

app.set('views',__dirname);
app.set('view engine','ejs');

port=process.env.PORT || 8000;

app.listen(port,function(){
    console.log("connected");
});