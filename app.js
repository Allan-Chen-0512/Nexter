const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
