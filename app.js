const express = require('express');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const cartRoute = require('./route/cart');
global.dbConnect = require('./connect');

const db = require("./model");
try{
  console.log(db.cart.test()); 
} catch(e){
  console.log(e);
}
// db.user.hasMany(db.cart);
// db.cart.belongsTo(db.user);
// db.cart.hasMany(db.cartItem);
// db.cartItem.belongsTo(db.cart);
// db.products.hasMany(db.cartItem);
// db.cartItem.belongsTo(db.products); 
 
db.sequelize.sync(); 

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// })
//   .catch(err => {
//     console.log(err);  
//   });


const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+'/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true
}));


app.use(cookieParser());


app.use((req, res, next)=> {
    
    if(typeof req.session.session_id === "undefined"){
        req.session.session_id = new Date().getTime();
        req.session.cart = {};
    }
    next();
})
app.use('/', cartRoute);


app.listen(port, () => {
    console.log(`Listen to port ${port}`);
});

