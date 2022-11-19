const fs = require("fs/promises");
const path = require("path");
const express = require("express");

const PORT = 80;

const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const html = await fs.readFile(path.join(__dirname, "index.html"), "utf8");
  res.send(html);
});

app.listen(PORT, () => console.log("Server listening on port " + PORT));
