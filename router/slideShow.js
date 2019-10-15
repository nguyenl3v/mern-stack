const express = require("express");
const router = express.Router();
const SlideShow = require("../model/slideshow");
const fs = require("fs-extra");
const mkdirp = require("mkdirp");

router.get("/", async function(req, res) {
  const slideShow = await SlideShow.find();
  res.status(200).json(slideShow);
});

router.post("/add", function(req, res) {
  let { heading, title, button, buttonLink } = req.body;
  let image = req.files.file;
  let imagefile = image.name;
  if (!heading || !title || !button || !buttonLink) {
    if (imagefile.match(/\.(mp4)$/)) {
      const slideShow = new SlideShow({
        image: imagefile
      });
      slideShow.save(async function(err) {
        if (err) res.status(404).json({ msg: err });
        await mkdirp("client/public/slideshow/" + slideShow._id, function(err) {
          console.log(err);
        });
        const path =
          (await "client/public/slideshow/") + slideShow._id + "/" + imagefile;
        image.mv(path, function(result) {
          console.log(result);
        });
        res.status(201).json({ msg: "add slideShow success" });
      });
    } else {
      const slideShow = new SlideShow({
        heading,
        title,
        button,
        buttonLink,
        image: imagefile
      });
      slideShow.save(function(result) {
        mkdirp("client/public/slideshow/" + slideShow._id, function(err) {
          console.log(err);
        });
        const path = "client/public/slideshow/" + slideShow._id + "/" + imagefile;
        image.mv(path, function(err) {
          console.log(err);
        });
        res.status(201).json({ msg: "add slideShow success" });
      });
    }
  } else {
    res.status(404).json({ msg: "fields all is empty" });
  }
});

router.get("/delete/:id", function(req, res) {
  const path = "client/public/slideshow/" + req.params.id;
  SlideShow.findByIdAndDelete(req.params.id, function(err, slide) {
    slide.save(function(err){
      fs.remove(path, function(err){
        res.status(500).json({msg:err})
      })
    });
    res.status(200).json({ msg: "delete slideshow success" });
  });
});

module.exports = router;
