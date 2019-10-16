const express = require("express");
const router = express.Router();
const SlideShow = require("../model/slideshow");
const fs = require("fs-extra");
const mkdirp = require("mkdirp");
let images = [];
router.get("/", async function(req, res) {
  const slideShow = await SlideShow.find();
  res.status(200).json(slideShow);
});

router.post("/add", function(req, res) {
  let { heading, title, button, buttonLink } = req.body;
  const slideShow = new SlideShow({
    heading,
    title,
    button,
    buttonLink,
    image: images.toString()
  });
  slideShow.save();
  images = [];
  res.status(201).json({ msg: "add slideShow success" });
});

router.get("/delete/:id/:file", function(req, res) {
  const path = "client/public/upload/" + req.params.file;
  SlideShow.findByIdAndDelete(req.params.id, function(err, slide) {
    slide.save(function(err) {
      fs.remove(path, function(err) {
        if (err) res.status(500).json({ msg: err });
      });
      return res.status(200).json({ msg: "delete slideshow success" });
    });
  });
});

router.post("/upload", function(req, res) {
  if (typeof req.files !== "object") {
    return res.status(404).json({ msg: "image is empty" });
  }
  let image = req.files.file;
  let imagefile = image.name;
  const id = Date.now();
  const path = "client/public/upload/" + id + "/" + imagefile;
  mkdirp("client/public/upload/" + id, function(err) {
    if (err) console.log(err);
  });
  image.mv(path, function(err) {
    if (err) console.log(err);
  });
  images.push(id +"/"+ imagefile);
});
router.post("/edit", function(req, res) {
  const { heading, title, button, buttonLink,urlFile, id } = req.body;
  const path = "client/public/upload/" + urlFile;
  SlideShow.findById(id, function(err, slide) {
    slide.heading = heading;
    slide.title = title;
    slide.button = button;
    slide.buttonLink = buttonLink;
    slide.image = images.toString();
    slide.save(function(err) {
      fs.remove(path, function(err) {
        if (err) res.status(500).json({ msg: err });
      });
    });
    images = [];
    res.status(201).json({ msg: "edit slideShow success" });
  });
});

module.exports = router;
