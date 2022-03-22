require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello sicky");
  res.send("I'm so hungy man!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
