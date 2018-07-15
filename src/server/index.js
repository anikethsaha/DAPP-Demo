const express = require('express')
const bodyParser = require('body-parser')
const winston = require('winston')
var expressControllers = require('express-controller');
var session = require('express-session')
const cors = require('cors')
const helmet = require('helmet')
const { port , sessionSecretKey} = require('../../config')
const path  = require('path')
var csrf = require('csurf');
var RateLimit = require('express-rate-limit')
var fs = require('fs');

// SSR
import { renderToString } from "react-dom/server"
import { App } from "../common";

// const { renderToString } = require('react-dom/server');
// const { App } = require('../common');


// M
// Middlewares
const app = express();
app.use(helmet());

// session Middleware
app.use(session({
    secret: sessionSecretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use(csrf());
app.set('port', (process.env.PORT ||port));

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors());
// use this middleware in authentications routes or post method routes
var authAPILimiter = new RateLimit({
    windowMs: 5*60*1000, // 5 minutes
    max: 1000,
    delayMs: 0 // disabled
  });
// loggin middleware
const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/debug.log', level: 'debug' }),
      new winston.transports.File({ filename: './logs/crit.log', level: 'crit' }),
      new winston.transports.File({ filename: './logs/warn.log', level: 'warn' }),
      new winston.transports.File({ filename: './logs/combined.log' })
    ]
  });

// V
// static files and views
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './build')))
app.set('view engine' , 'html');
app.engine('html', require('ejs').renderFile);
app.set('views' , path.join(__dirname,'./public'));


// C
//controller settings
//setting up the controller
expressControllers.setDirectory(path.join(__dirname,'/controller')).bind(app);

app.get('/',(req,res)=>{
  console.log('object :',req);
  var RenderedAppToString = renderToString(<App />);
  var indexHTMLpage = fs.readFileSync('./public/index.html');
  var indexHTMLpageToString = indexHTMLpage.toString();
  console.log('indexHTMLpageToString :', indexHTMLpageToString);
  var HTMLWithSSRComponentInIt = indexHTMLpageToString.replace("<!-- __APP__ -->",RenderedAppToString);
  console.log('HTMLWithSSRComponentInIt :', HTMLWithSSRComponentInIt);
  res.send("HTMLWithSSRComponentInIt");
})
app.listen(port,() => {
    console.log( '> Server is running on PORT ',port );
})