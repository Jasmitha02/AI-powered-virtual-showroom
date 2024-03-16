const express = require("express");
const repairRoute = express.Router();
const repairSchema = require("../modelSchema/repairSchema");
const mongoose = require('mongoose');

repairRoute.post("/add-repair",(req,res)=>{
    repairSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

repairRoute.get("/",(req,res)=>{
    repairSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})



repairRoute.route("/update-repair/:id")
.get((req,res)=>{
    repairSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    repairSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

repairRoute.delete("/delete-repair/:id",(req,res)=>{
    repairSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = repairRoute;