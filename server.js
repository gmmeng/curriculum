/*
    description: Curriculum page.

    author: Gabriel Moreira
    date: April 15th, 2018
*/

//requirements
const express = require("express");
const exphbs = require('express-handlebars');
const path = require("path");
const fs = require("fs");
//end requirements


//APP setup
const app = express();
const PORT = process.env.PORT || 3000
app.engine(".hbs", exphbs({extname: ".hbs"}));
app.set("view engine", ".hbs");                                       
app.use(express.static(path.join(__dirname, '/public')));
//end APP setup

//Variables
//end variables


//Methods

//Mongoose connection methods
//End Mongoose connection methods

//This method renders the login page requested using the
//URL wihthout aditional path.
app.get("/", function(req, res){
    res.render('index', {
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
//end methods