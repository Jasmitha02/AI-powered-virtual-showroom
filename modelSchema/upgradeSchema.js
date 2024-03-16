const mongoose=require("mongoose");
const upgradeSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "mobile":{type:String},
    "carName":{type:String},
    "model":{type:String},
    "type":{type:String}
},{
    "collection": "upgrade"
})

module.exports = mongoose.model("upgradeSchema", upgradeSchema);