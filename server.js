const express = require("express");
const app = express();
const path = require("path");

const root = path.join(__dirname, "build");

app.get("/", (_, res) => {
  res.send("Hello, world!")
})
app.use("/pasta", express.static(root));

app.get("/pasta/*", (_, res) => {
  res.sendFile(path.resolve(__dirname + "/build/", "index.html"));
});

app.listen(4004);
