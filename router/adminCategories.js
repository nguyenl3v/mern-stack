const express = require("express");
const router = express.Router();
const Categories = require("../model/adminCategories");

router.get("/", async function(req, res) {
  const cate = await Categories.find();
  res.status(200).json(cate);
});

router.post("/add", function(req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(404).json({ msg: "name is required" });
  } else {
    Categories.findOne({ name: name }, function(err, cate) {
      if (cate) {
        res.status(403).json({ msg: "name is already" });
      } else {
        const categories = new Categories({
          name
        });
        categories.save();
        res.status(201).json({ msg: "add categories success" });
      }
    });
  }
});

router.post("/edit", function(req, res) {
  const { name, id } = req.body;
  if (!name || !id) {
    res.status(404).json({ msg: "field all is required" });
  } else {
    Categories.findOne({ name: name }, function(err, cate) {
      if (cate) {
        res.status(403).json({ msg: "name is already" });
      } else {
        Categories.findById(id, function(err, categories) {
          categories.name = name;
          categories.save();
          res.status(201).json({ msg: "edit categories success" });
        });
      }
    });
  }
});

router.get("/delete/:id", function(req, res) {
  Categories.findByIdAndDelete(req.params.id, function(err, cate) {
    cate.save();
    res.status(200).json({ msg: "delete categories success" });
  });
});

module.exports = router;
