'use strict'
require("dotenv").config();


const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT;

// -------------- Middleware ------------------
const stamper = require('./middleware/stamper');
const pageNotFound = require('./middleware/404');
const serverError = require('./middleware/500');

app.get('/', stamper, isAuth, handlehome);
app.get('/bad', badRequest);

app.use('*', pageNotFound);
app.use(serverError);

function handlehome(req, res) {

    res.status(200).json({
        code: 200,
        message: "welcome to Home Page",
        time: req.stamper
    })
}
function badRequest(req, res, next) {
    req.body = {
        test:'test'
    }
    // if (!number) {
        next({message: 'NaN'});
    // }
    
}

function isAuth(req, res, next) {
    console.log("user Authintication");
    next();
}








function start(port) {
    app.listen(PORT, () => console.log('Up rening on PORT:: ', PORT));

}
module.exports = {
    app,
    start
}