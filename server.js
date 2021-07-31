const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const path = require('path')


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "html");


app.use(logger("dev"));
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
    
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});