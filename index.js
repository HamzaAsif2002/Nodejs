const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Home Page");
});
app.get("/about", (req, res) => {
  res.end("About Page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
