const express = require("express");
const useRoute = express.Router();
const carSchema = require("../modelSchema/carSchema");
const mongoose = require('mongoose');
useRoute.get("/",(req,res)=>{
    carSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

useRoute.get('/:id', (req, res) => {
    carSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err) return err;
        else res.json(data)
    })
})
module.exports = useRoute;
