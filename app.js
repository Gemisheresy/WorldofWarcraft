var express = require('express');
var keyFile = require('./keyFile');
var request = require('request');
var app = express();
var apiKey = keyFile.apiKey;
var output;
var serach;
/*
app.param('itemid',function(req,res,next,value){
  console.log(value);
  request('https://us.api.battle.net/wow/item/'+value+'?locale=en_US&apikey='+apiKey,function(response,data){
    output = data.body;
    console.log(data.headers);
    console.log(output);
    });
  next();
})
app.get('/item/:itemid',function(req,res,next){
  console.log('Item Requested');

});
app.param('spellid',function(req,res,next,value){
  console.log(value);
  request('https://us.api.battle.net/wow/spell/'+value+'?locale=en_US&apikey='+apiKey,function(response,data){
    output = data.body;
    console.log(data.headers);
    console.log(output);
    });
  next();
})
app.get('/spell/:spellid',function(req,res,next){
  console.log("Spell Requested");
})
*/
app.param('type',function(req,res,next,type){
  search = type;
  console.log(search);
  next();
})
app.param('id',function(req,res,next,value){
  console.log(search,value);
  request('https://us.api.battle.net/wow/'+search+ '/' +value+'?locale=en_US&apikey='+apiKey,function(response,data){
    output = data.body;
    console.log(data.headers);
    console.log(output);
  });
  next();
})
app.get('/index/:type/:id',function(req,res,next){
  console.log('Hit me');
});


var server = app.listen(8080,function(){
  var host= server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s',host,port);
});
