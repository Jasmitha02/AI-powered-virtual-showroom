const express = require("express");
const maintainRoute = express.Router();
const maintainSchema = require("../modelSchema/maintainSchema");
const mongoose = require('mongoose');

maintainRoute.post("/add-maintain",(req,res)=>{
    maintainSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

maintainRoute.get("/",(req,res)=>{
    maintainSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})



maintainRoute.route("/update-maintain/:id")
.get((req,res)=>{
    maintainSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    maintainSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

maintainRoute.delete("/delete-maintain/:id",(req,res)=>{
    maintainSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = maintainRoute;