const express = require("express");
const connectDB = require("./config/dbconfig");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => console.log(`Server is running on port ${port}`));