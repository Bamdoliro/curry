const express = require("express");
const fs = require("fs");
const next = require("next");

const dev = process.env.NODE_ENV === "development";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/job/1", (req, res) => {
    var path = "posts/밤돌이로.md";
    var file = fs.readFileSync(path, "utf8");
    res.send({
      markdown: file,
      title: "Bamdoliro",
    });
  });

  server.get("/api/job/2", (req, res) => {
    var path = "posts/프론트엔드.md";
    var file = fs.readFileSync(path, "utf8");
    res.send({
      markdown: file,
      title: "Frontend Developer",
      position: "프론트엔드 개발자",
      googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });
  });

  server.get("/api/job/3", (req, res) => {
    var path = "posts/백엔드.md";
    var file = fs.readFileSync(path, "utf8");
    res.send({
      markdown: file,
      title: "Backend Developer",
      position: "백엔드 개발자",
      googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });
  });

  server.get("/api/job/4", (req, res) => {
    var path = "posts/디자이너.md";
    var file = fs.readFileSync(path, "utf8");
    res.send({
      markdown: file,
      title: "Product Designer",
      position: "디자이너",
      googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.log("Listening on port", port);
  });
});
