const express = require("express");
const app = express();
const connectdb = require("./config/db.js");
const notesRoute=require("./routes/notes.route.js")

connectdb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("got it");
});

app.use("/notes",notesRoute)

module.exports = app;
