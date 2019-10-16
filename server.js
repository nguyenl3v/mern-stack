const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const app = express();

const fileUpload = require("express-fileupload");
var mongoose = require("mongoose");
const db = require("./config/db").MongoURL;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoose connected"))
  .catch(err => console.log(err));
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type", "authorization"],
    exposedHeaders: ["sessionId", "authorization"],
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);
app.use(fileUpload());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const adminMenu = require("./router/adminMenu");
const adminCategories = require("./router/adminCategories");
const slideShow = require("./router/slideShow");
app.use("/admin/slideshow", slideShow);
app.use("/admin/categories", adminCategories);
app.use("/admin/menu", adminMenu);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("started server port 4000"));
