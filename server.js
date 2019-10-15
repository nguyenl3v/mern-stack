const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const app = express();

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
    origin: "http://localhost:3000" || "https://mern-stack-cms.herokuapp.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());




if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("started server port 4000"));
