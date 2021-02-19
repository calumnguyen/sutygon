const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const app = express();

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, "build")));
// Load env vars

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () =>
  console.log(`App is live on port ${port}!`)
);
