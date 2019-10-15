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
    type:Object
  }
});

module.exports = mongoose.model("slideshow", slideshowSchema);