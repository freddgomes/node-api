const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || '3000';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routesTask = require("./routes/routes-api");

app.use("/api", routesTask);

app.listen(port, () => console.log(`API running on port ${port}`));
