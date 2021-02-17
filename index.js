const express = require('express');
const cons = require('consolidate');
const mongooes = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash-2');
const session = require('express-session');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const config = require('./config/database');
const app = express();
mongooes.connect(config.database);
app.engine('html', cons.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.locals.errors = null;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('keyboard fzs'));
app.use(session({
  secret: 'keyboard fzs',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


// connection
var db = mongoose.connect;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connect to the database.");
});

// set routes 
var pages = require('./routes/pages');
app.use('/',pages);


app.listen(3000, () => console.log('Example app listening on port 3000!'))