const express = require("express");
const app = express();
const path = require("path");

const root = path.join(__dirname, "build");

app.get("/", (_, res) => {
  res.send("페이지를 찾을 수 없습니다.")
})
app.use("/pasta", express.static(root));

app.get("/pasta/*", (_, res) => {
  res.sendFile(path.resolve(__dirname + "/build/", "index.html"));
});

app.listen(4004);
