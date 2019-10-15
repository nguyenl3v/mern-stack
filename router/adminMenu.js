const express = require("express");
const Menu = require("../model/adminMenu");
const router = express.Router();

router.get("/list", async (req, res) => {
  const menu = await Menu.find();
  res.status(200).json(menu);
});

router.post("/list", function(req, res) {
  const { title, link } = req.body;
  if (!title || !link) {
    return res.status(404).json({ msg: "field all is required" });
  }
  Menu.findOne({ title: title }, function(err, menu) {
    if (menu) {
      res.status(404).json({ msg: "title is already" });
    } else {
      var menu = new Menu({
        title,
        link
      });
      menu.save();
      res.status(201).json({ msg: "add menu success" });
    }
  });
});
router.get("/list/:id", function(req, res) {
  Menu.findByIdAndDelete(req.params.id, function(err, menu) {
    menu.save();
    res.status(200).json({ msg: "delete success" });
  });
});
router.post("/list/edit", function(req, res) {
  const { title, link, id } = req.body;
  if (!title || !link) {
    return res.status(404).json({ msg: "field all is required" });
  } else {
    Menu.findById(id, function(err, menu) {
      menu.title = title;
      menu.link = link;
      menu.save();
      res.status(201).json({ msg: "edit menu success" });
    });
  }
});
module.exports = router;
