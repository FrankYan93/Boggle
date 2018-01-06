var express = require("express"),
    harp = require("harp");
    session = require('express-session')
    FileStore = require('session-file-store')(session);

var app = express();
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  store: new FileStore,
  secret: 'knkjhvkhckchglhuucrxdtl',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false},
  rolling: true
}));
app.get('/', function(req,res){
  console.log(req.session);
  if (req.session.highscore){
  }else{
    req.session.highscore = 0;
  }
  res.render('index.ejs',{highscore: req.session.highscore});
});

app.post('/', function(req,res){
  console.log(req.query.highscore);
  req.session.highscore = req.query.highscore;
  req.session.save()
});

app.use(express.static(__dirname + "/public"));
app.use(harp.mount(__dirname + "/public"));


var port = process.env.PORT || 3333;
app.listen(port, function() {
  console.log("Listening on port " + port);
});
