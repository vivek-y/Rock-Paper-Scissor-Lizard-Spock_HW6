var express = require("express");
var JSONObj= {outcome:"",wins: 0,losses: 0 ,ties: 0};
var win=0;
var loss=0;
var tie=0;
var http = require("http");
var game;
game = express();
http.createServer(game).listen(8000);
function CALL(req, res) {
    game.use('/result', express.static(__dirname + '/result'));
    res.sendFile('result/index.html', {
        root: __dirname
    });
    return res;
}
game.get('/', function(req, res) {
    res = CALL(req, res);
});
game.post('/output', function(req, res) {
    res.json(JSONObj);
});
game.post("/play/rock", function (req, res)
{
        var Users='rock';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="rock")
         {
            if(Users===rest)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res = CALL(req, res);
            }
            else if(rest==="paper")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="scissor")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(rest==="lizard")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else(rest==="spock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
            }
          }   
});

game.post("/play/paper", function (req, res)
{
      var Users='paper';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="paper")
         {
            if(Users===rest)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }

            else if(rest==="rock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(rest==="scissor")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(rest==="lizard")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else(rest==="spock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
          }   
      
});

game.post("/play/scissor", function (req, res)
{
  var Users='scissor';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="scissor")
         {
            if(Users===rest)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="rock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="paper")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="lizard")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else(rest==="spock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
         }   

});
game.post("/play/lizard", function (req, res)
{
      var Users='lizard';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="lizard")
         {
            if(Users===rest)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="rock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="scissor")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="paper")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else(rest==="spock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }

         }   
      
});
game.post("/play/spock", function (req, res)
{
  var Users='spock';
        var Servers= ["rock","paper","scissor","lizard","spock"];
        var rest= Servers[Math.floor(Math.random()*Servers.length)];
        if(Users==="spock")
         {
            if(Users===rest)
            {
              tie=tie+1;
              JSONObj.outcome='tie;'
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(rest==="rock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="scissor")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(rest==="lizard")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else(rest==="paper")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
          }   

});
console.log("Ready to play!");