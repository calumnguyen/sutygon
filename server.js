const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const app = express();
const dotenv = require('dotenv')

app.use(express.static(__dirname));

dotenv.config({ path: "./config.env" });

app.use(express.static(path.join(__dirname, "build")));
// Load env vars

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html')) // relative path
  })
}

app.listen(port, () =>
  console.log(`App is live on port ${port}!`)
);
