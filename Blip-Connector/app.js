require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`),
);