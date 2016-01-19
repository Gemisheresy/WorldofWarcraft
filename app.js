var express = require('express');
var keyFile = require('./keyFile');
var request = require('request');
var app = express();
var apiKey = keyFile.apiKey;
var output;
var search;

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
app.param('type',function(req,res,next,type){
  search = type;
  console.log(search);
  next();
})
app.param('id',function(req,res,next,value){
  console.log(search,value);
  request('https://us.api.battle.net/wow/'+search+ '/' +value+'?locale=en_US&apikey='+apiKey,function(response,data){
    output = JSON.parse(data.body);
    console.log(data.headers);
    for (prop in output){
      if (typeof output[prop] === 'object'){
        console.log(prop , output[prop]);
      } else {
        console.log(prop + ': ' + typeof output[prop]);
      }

    }
  });
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
  request('https://us.api.battle.net/wow/character/'+search+'/'+charName+'?locale=en_US&apikey='+apiKey,function(response,data){
    output = JSON.parse(data.body);
    console.log(data.headers);
    console.log(output);
    for (prop in output){
      console.log(prop, output[prop]);
    }
  });
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
