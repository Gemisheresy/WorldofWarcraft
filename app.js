var express = require('express');
var keyFile = require('./keyFile');
var request = require('request');
var app = express();
var apiKey = keyFile.apiKey;
var weapon;
var header;

app.param('id',function(req,res,next,value){
  console.log(value);
  request('https://us.api.battle.net/wow/item/'+value+'?locale=en_US&apikey='+apiKey,function(response,data){
    weapon = data.body;
    console.log(data.headers);
    console.log(weapon);
    res.write('<p>' +toString(weapon) + '</p>');
    
  });
  next();
})
app.get('/item/:id',function(req,res,next){
  console.log('You have a hit');

});

var server = app.listen(8080,function(){
  var host= server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s',host,port);
});
