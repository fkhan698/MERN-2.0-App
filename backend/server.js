if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

//Routes
const indexRouter = require("./routes/index");
const promptRouter = require("./routes/prompt");

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
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use("/static", express.static(path.join(`${__dirname}/public`)));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

//Routes
app.use("/", indexRouter);
app.use("/prompts", promptRouter);

app.listen(3000);
