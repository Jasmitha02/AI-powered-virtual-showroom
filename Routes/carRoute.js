const express = require("express");
const carRoute = express.Router();
const carSchema = require("../modelSchema/carSchema");
const mongoose = require('mongoose');

carRoute.post("/add-car",(req,res)=>{
    carSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get("/",(req,res)=>{
    carSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get('/:id', (req, res) => {
    carSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err) return err;
        else res.json(data)
    })
})

carRoute.route("/update-car/:id")
.get((req,res)=>{
    carSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    carSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.delete("/delete-car/:id",(req,res)=>{
    carSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = carRoute;