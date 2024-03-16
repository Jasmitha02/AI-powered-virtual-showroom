const mongoose=require("mongoose");
const maintainSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "mobile":{type:String},
    "carName":{type:String},
    "model":{type:String},
    "type":{type:String}
},{
    "collection": "maintain"
})

module.exports = mongoose.model("maintainSchema", maintainSchema);