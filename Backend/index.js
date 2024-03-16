var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
var carRoute=require("./Routes/carRoute");
var useRoute=require("./Routes/useRoute");
var userRoute=require("./Routes/userRoute");
var maintainRoute=require("./Routes/maintainRoute");
var repairRoute=require("./Routes/repairRoute");
var upgradeRoute=require("./Routes/upgradeRoute");
var loginRoute=require("./Routes/loginRoute");
var mongoose =require("mongoose");
mongoose.set("strictQuery",true)


mongoose.connect("mongodb+srv://test:12345@cluster0.642eqd9.mongodb.net/Carshowroom",{ useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/carRoute",carRoute);
app.use("/useRoute",useRoute);
app.use("/userRoute",userRoute);
app.use("/maintainRoute",maintainRoute);
app.use("/repairRoute",repairRoute);
app.use("/upgradeRoute",upgradeRoute);
app.use("/loginRoute",loginRoute);
app.listen(4000,()=>{
    console.log("Server started at 4000");
})