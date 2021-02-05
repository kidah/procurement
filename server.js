const {Engine} = require("json-rules-engine");
var http = require('http');
var path = require("path");
var express = require('express');
const app= express();
const bodyParser = require('body-parser')
let engine = new Engine();
var message = ""

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'static')));


app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'index.html'));
});


engine.addRule({
  conditions: {
    any: [{
      all: [{
        fact: 'gameDuration',
        operator: 'equal',
        value: 40
      }, {
        fact: 'personalFoulCount',
        operator: 'greaterThanInclusive',
        value: 5
      }]
    }, {
      all: [{
        fact: 'gameDuration',
        operator: 'equal',
        value: 48
      }, {
        fact: 'personalFoulCount',
        operator: 'greaterThanInclusive',
        value: 6
      }]
    }]
  },
  onSuccess(){
    message = "Player has fouled out!"
    console.log(message)
  },
  onFailure(){
    message = "Failed specified rule"
    console.log(message)
  },
  event: {  // define the event to fire when the conditions evaluate truthy
    type: 'fouledOut',
    params: {
      message: message
    }
  }
});

app.post('/compute',function(req,res){
	const facts = { personalFoulCount: parseInt(req.body.foulCount,10),
  gameDuration: parseInt(req.body.gameDuration,10)};

engine
  .run(facts)
  .then(results => {
    results.events.map(event => console.log(event.params.message));
  })
  .catch((error)=> console.log('err is', error));
  setTimeout(() => {  res.json(message) }, 2000);
});



app.listen(3000, () => {
  console.log("Your app is running");
});