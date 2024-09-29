const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Import routes
const indexRouter = require("./app_server/routes/index");

// Import the database connection
const connectDB = require("./app_server/models/db");

const app = express();

// Connect to the database
connectDB();

// View engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "jade");

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.use("/", indexRouter);

// Error handling for 404
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error", { page: "error" });
});

module.exports = app;
