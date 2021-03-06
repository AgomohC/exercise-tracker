// require express
const express = require("express");

//initialize dotenv
require("dotenv").config();

//connection function
const connectDB = require("./db/connect");

//initialize express
const app = express();

// middleware //
//static files
app.use(express.static("./public"));

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const tracker = require("./routes/tracker");
app.use("/api/users", tracker);
app.use((req, res) => {
  res.send("Page does not exist");
});

const port = process.env.PORT || 8080;
//  connector function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
