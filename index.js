require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
const { connection } = require("./db/conn");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server start");
});

app.use(router);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Listining to port");
  } catch (err) {
    console.log("Error in Connectiong DB");
    console.log(err);
  }
  console.log(`server is start port number ${port}`);
});
