const mongoose=require("mongoose");
const repairSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "mobile":{type:String},
    "carName":{type:String},
    "model":{type:String},
    "type":{type:String}
},{
    "collection": "repair"
})

module.exports = mongoose.model("repairSchema", repairSchema);