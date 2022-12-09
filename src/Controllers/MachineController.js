const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


let app = express();
app.use(bodyParser.json());
app.use(cors());