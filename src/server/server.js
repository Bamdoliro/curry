const express = require("express");
const fs = require("fs");
const next = require("next");

const dev = process.env.NODE_ENV === "development";
const port = 8080;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/job/1", (req, res) => {
    var path = "src/posts/밤돌이로.md";
    var file = fs.readFileSync(path, "utf8");
    console.log(file);
    res.send(file);
  });

  server.get("/api/job/2", (req, res) => {
    var path = "src/posts/프론트엔드.md";
    var file = fs.readFileSync(path, "utf8");
    res.send(marked(file.toString()));
  });

  server.get("/api/job/3", (req, res) => {
    var path = "src/posts/백엔드.md";
    var file = fs.readFileSync(path, "utf8");
    res.send(marked(file.toString()));
  });

  server.get("/api/job/4", (req, res) => {
    var path = "src/posts/디자이너.md";
    var file = fs.readFileSync(path, "utf8");
    res.send(marked(file.toString()));
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.log("Listening on port", port);
  });
});
