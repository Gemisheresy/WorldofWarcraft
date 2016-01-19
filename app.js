var express = require('express');
var keyFile = require('./keyFile');
var request = require('request');
var database = require('./models/models');
var app = express();
var apiKey = '?locale=en_US&apikey=' + keyFile.apiKey;
var url = 'https://us.api.battle.net/wow/';
var output;
var search;
function outputConvert(response,data){
  output = JSON.parse(data.body);
  for (prop in output){
    console.log(prop, output[prop]);
  }
};

app.param('itemid',function(req,res,next,value){
  console.log(value);
  request(url + 'item/'+value+apiKey,outputConvert);
  next();
})
app.get('/item/:itemid',function(req,res,next){
  console.log('Item Requested');

});
app.param('spellid',function(req,res,next,value){
  console.log(value);
  request(url + 'spell/'+value+apiKey,outputConvert);
  next();
})
app.get('/spell/:spellid',function(req,res,next){
  console.log("Spell Requested");
})
app.param('type',function(req,res,next,type){
  search = type;
  console.log(search);
  next();
})
app.param('id',function(req,res,next,value){
  console.log(search,value);
  request(url+search+ '/' +value+apiKey,outputConvert);
  next();
})
app.get('/index/:type/:id',function(req,res,next){
  console.log('Hit me');
});
app.param('realm',function(req,res,next,realm){
  search = realm;
  next();
})
app.param('name',function(req,res,next,charName){
  request(url+ 'character/'+search+'/'+charName+apiKey,outputConvert);
  next();
})
app.get('/character/:realm/:name',function(res,req,next){
  console.log("Character search");
});


var server = app.listen(8080,function(){
  var host= server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s',host,port);
});
