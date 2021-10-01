const express = require("express");
const app = express();
const path = require("path");

const root = path.join(__dirname, "build");

app.use("/", express.static(root));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname + "/build/", "index.html"));
});

//app.listen(4004);
app.listen(443);
