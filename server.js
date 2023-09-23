const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("view"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.listen(PORT, () => {
  console.log("connect ho gya re baba");
});
