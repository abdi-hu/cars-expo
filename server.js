const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");
const port = process.env.PORT || 3000;
const authorization = require("./utils/authorization");

//require config file
require("./config/database");
require("./config/passport");

const indexRouter = require("./routes/index");
const carsRouter = require("./routes/cars");
const bidsRouter = require("./routes/bids");
const usersRouter = require("./routes/users");

//require route variables

const app = express();

//app middleware

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(
	session({
		secret: "supersecret",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(authorization.addUserToRequest);
//use routes
app.use("/", indexRouter);
app.use("/cars", carsRouter);
app.use("/users", usersRouter);
app.use("/", bidsRouter);

app.listen(port, () => {
	console.log(`Express is listening on on port: ${port}`);
});
