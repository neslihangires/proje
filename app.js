const express = require('express');
require('./models/db')()
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const jwt = require ('jsonwebtoken')
const expressSession = require('express-session')
const connectMongo = require ('connect-mongo')
const passport = require ('passport')
const auth = require('./middlewares/auth');
app.use('/', express.static(path.join(__dirname, '../PROJE')));

//const router = expressRouter();

app.use( express.urlencoded({extended: true}));
var ejsLayouts = require("express-ejs-layouts")
//ejs için eklendi
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
var mongoStore = connectMongo;

app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    secret: 'testediyorum',
    store: mongoStore.create({  mongoUrl: 'mongodb://127.0.0.1/Proje'})
}));
//var mongoDB = 'mongodb://127.0.0.1:27017/Project';
//const MongoDBStore = require('connect-mongodb-session')(expressSession);


//Flash -message Middleware
app.use((req,res,next)=>{
  var {userId} = req.session
   if(userId) {
       res.locals = { displayLink: true };
   }
   else{
    res.locals = {  displayLink: false  };
   }
   next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, 'public')));

//ejs modülünde layout kullanmak için eklendi
app.use(ejsLayouts);

//route modülü
var route = require('./routers/indexfipRoute');
app.use('/', route);

var route = require('./routers/asilarRoute');
app.use('/asilar', route);

var route = require('./routers/blogRoute');

app.use('/blog', route);

var route = require('./routers/ilaclarRoute');
app.use('/ilaclar', route);

var route = require('./routers/iletisimRoute');
app.use('/iletisim', route);

var route = require('./routers/indexfipRoute');
app.use('/', route);

var route = require('./routers/loginRoute');
app.use('/login', route);

var route = require('./routers/logoutRoute');
app.use('/logout', route);

var route = require('./routers/registerRoute');
app.use('/register', route);

var route = require('./routers/addpost');
app.use('/addpost', route);

var route = require('./routers/adminpanelRoute');
app.use('/admin', route);

var route = require('./routers/addkediRoute');
app.use('/kediekle', route);

var route = require('./routers/kedilerimizRoute');
app.use('/kedilerimiz', route);

var kullanici = require('./models/kullanici');
const Posts = require('./models/post');
// const MongoStore = require('connect-mongo');
// const { default: mongoose } = require('mongoose');
// const res = require('express/lib/response');



app.listen("8080", () => {
  console.log("sunucu 8080 portunda çalışıyor");
}); 