if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

//Routes

const postRouter = require("./routes/posts");

app.use(cors());

//Database
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

//View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//Routes

app.use("/posts", postRouter);

app.listen(5000);
