const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.MO_URL);

module.exports = { connection };
