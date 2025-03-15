require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🚀 Hello, from docker , jenkins  ");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
