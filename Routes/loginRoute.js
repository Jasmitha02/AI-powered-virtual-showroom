const express = require("express");
const loginSchema = require("../modelSchema/loginSchema"); 
const loginRoute = express.Router();
const mongoose = require("mongoose");

loginRoute.post("/register", (req, res) => {
    loginSchema.create(req.body, (err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    });
});

loginRoute.get("/", (req, res) => {
    loginSchema.find((err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    });
});

loginRoute.get("/get-password/:email", (req, res) => {
    loginSchema.findOne({ email: req.params.email }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});

loginRoute.route("/profile/:id")
    .get((req, res) => {
        loginSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
            if (err)
                return err;
            else
                res.json(data);
        });
    })
    .put((req, res) => {
        loginSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
            { $set: req.body },
            (err, data) => {
                if (err)
                    return err;
                else
                    res.json(data);
            });
    });

loginRoute.delete("/deleteAccount/:id", (req, res) => {
    loginSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
        (err, data) => {
            if (err)
                return err;
            else
                res.json(data);
        });
});

module.exports = loginRoute;
