const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const Prescription = require("./routes/prescription");
//envioronment variables
dotenv.config();
mongoose
  .connect(process.env.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("mongodb connection successful");
  });
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use("/prescription", Prescription);
// Serve any static files
// app.use(express.static(path.join(__dirname, "client1/build")));
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "client1/build", "index.html"));
});
  // }
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("express server is runnning on port " + port);
});