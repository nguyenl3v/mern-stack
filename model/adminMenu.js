const mongoose = require("mongoose");

const adminMenu = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  link:{
    type:String,
    required:true
  }
})
module.exports = mongoose.model("adminMenu", adminMenu)