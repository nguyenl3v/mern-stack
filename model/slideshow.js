const mongoose = require("mongoose");

const slideshowSchema = new mongoose.Schema({
  heading:{
    type:String
  },
  title:{
    type:String
  },
  button:{
    type:String
  },
  buttonLink:{
    type:String
  },
  image:{
    type:String
  }
});

module.exports = mongoose.model("slideshow", slideshowSchema);