var express = require('express');
var moment = require('moment');
var mongoose = require('mongoose');
var fs =require('fs');
var bodyparser =require('body-parser');
var jsonwebtoken=require('jsonwebtoken');

var app=express();
app.use(bodyparser.json());

//create collections
var user_data = require('./app/controller/ration_users');
var user_data = require('./app/controller/commodity');
app.get('/districtdata',user_data);


//admin sign
var adminsign=require('./app/controller/admin')
app.use('/',adminsign)

app.use('/api/post',adminsign)

app.listen(3004,() => {
    console.log('Server Running Port 3004');
});




