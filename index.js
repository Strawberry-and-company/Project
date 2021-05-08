const express = require("express");
const helmet = require("helmet");
var bodyParser = require("body-parser");
var csrf = require("csrf");
var cookieParser = require("cookie-parser");
const pug = require("pug");
const path = require("path");
var tls = require('tls');
const fs = require('fs');
var cache = require('memory-cache');
var Convert = require("./converter");
//variable
const app = express();
const port = 3000;
var toHtml = new Convert();
var author = [
  {
    name : 'Dutto',
    project : "Dutto"
  },
  {
    name : 'Procopio',
    project : 'Procopio'
  }
];
//middlewares
var csrfProtection = csrf({cookie: true});
var parseForm = bodyParser.urlencoded({extended: false})


//use and settings
//------------------------------
app.use(helmet());
app.use(cookieParser());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/*
var options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem')
};

*/
app.use(
  helmet({
    referrerPolicy: { policy: "no-referrer" },
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

//get
//------------------------------

app.get('/', function (req, res) {
  res.render('main');
});

app.get("/Autore/:id", (req, res) => {
  const data = {
		author: req.params.id
	}
  res.render('index', data);
});

app.get('*', (req, res, err) => {
  res.status(200).send('Ops, pagina non trovata');
});
//-------------------------------

app.listen(port, () => {
  console.log(`Start at http://localhost:${port}`);
});
