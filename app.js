const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
require("dotenv").config();

// Import routes
const indexRouter = require("./app_server/routes/index");
const AuthRouter = require("./app_server/routes/AuthRouter");
const cartRouter = require("./app_server/routes/cart");

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "jade");

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Session middleware configuration
app.use(
  session({
    secret: "secret",
    resave: false, // Only save sessions if they are modified
    saveUninitialized: false, // Only save sessions when something is stored
    cookie: { secure: false }, // Set to false if not using HTTPS
  })
);

// Define routes
app.use("/", indexRouter);
app.use("/", AuthRouter);
app.use("/", cartRouter);
app.use("/api/cart", cartRouter);

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
