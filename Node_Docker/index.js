const express = require("express");

const app = express();

const port = process.env.PORT || 4004;

app.get("/", (req, res) => {
  res.send("<h1>HI THERE!!</h1>");
});
app.listen(port, () => {
  console.log(`istning on port ${port}`);
});
