const express = require("express");
const upgradeRoute = express.Router();
const upgradeSchema = require("../modelSchema/upgradeSchema");
const mongoose = require('mongoose');

upgradeRoute.post("/add-upgrade",(req,res)=>{
    upgradeSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

upgradeRoute.get("/",(req,res)=>{
    upgradeSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})



upgradeRoute.route("/update-upgrade/:id")
.get((req,res)=>{
    upgradeSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    upgradeSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

upgradeRoute.delete("/delete-upgrade/:id",(req,res)=>{
    upgradeSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = upgradeRoute;