const express = require("express");
const app = express();

const router = require("./routers/router");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Simple API Gateway");
});

app.use(router);

app.listen(3006, () => {
  console.log("Simple API Gateway run on localhost:3006");
});

/* const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World2!"));

app.listen(3005, () => console.log("Example app listening on port 3005!")); */
