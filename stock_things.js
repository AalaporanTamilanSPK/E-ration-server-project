const express =require("express");
var app=express();
var mongoose =require("mongoose");

var jwt = require("jsonwebtoken");
const stock = express.Router();
var moment= require('moment');

var bodyparser = require('body-parser');
stock .use(bodyparser.json());
//districk_patteren
var rt_info =require("../model/distick_patten");
//things_patteren
var things = require("../model/commodity.js");

//post router
stock.post("/api/things",verfication,(req,res)=>{
    jwt.verify(req.token,"secretkey",(err,user)=>{
        if(err){
            res.sendStatus(403);
        }else{
            var prompt = require('prompt-sync')({sigint:true});
            var card_type = require("Enter The Card Type:");
            
            
        rt_info.find({type:card_type},{headoffamily:{name: 1}},function(err,user_data){
            if(user_data == 0){
                res.send('err');
            }else{

                things.find({type:card_type},function(err,things_data){
                    if(things_data == 0){
                        console.log(err);
                    }else{
                        console.log(things_data = user_data);
                        res.send(user_data+things_data);

                        var prompt = require('prompt-sync')({sigint:true});
                        var user_option = require("Buy Now (Y/N):");

                         if (user_option=="yes"|| user_option=="y"){
                             //res send (momoent().formet(llll))
                             console.log(moment().format('llll'))
                             var purcheddate = moment().format('llll')
                             if(req.session.purcheddate){
                                 req.session.purcheddate++;
                                 console.log("you buy this item on is data"+purcheddate+req.session.purcheddate+"times");

                             }else{
                                 req.session.purcheddate = 1;
                                 console.log("receipt");
                                 next();
                             }
                         }
                         else{
                             console.log("you didn't buy things yet");
                         }
                    }
                })
            }
        })    
        }
    })
});

function verfication(req,res,next){

    const bearerToken =req.headers["authorization"];
    if(typeof bearerToken !=="undefined"){
        const bearerToken = bearerToken.split("")[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }

}
module.exports=stock;