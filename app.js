const express = require("express");
// Initialize express app
const app = express();
// Call Routes
const generationRoute = require("./routes/generation");
const emailRoute = require("./routes/email");

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// built-in middleware for json
app.use(express.json({ limit: "50mb" }));
// Make link towards files public
app.use("/public", express.static("public"));
// Set Templating Engine
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// Declare routes
app.use("/generation", generationRoute);
app.use("/email", emailRoute);

module.exports = app;
