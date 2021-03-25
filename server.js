const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const port = process.env.PORT || 3000;
const authorization = require('./utils/authorization');
const favicon = require('serve-favicon')
const path = require('path');

require('./config/database');
//require config file
const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');
const bidsRouter = require('./routes/bids');
const usersRouter = require('./routes/users');

//require route variables

const app = express();

//app middleware
app.use(favicon(path.join(__dirname, 'public', 'imgs', 'car-solid.svg')));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'))
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false
}));
app.use(authorization.addUserToRequest);
//use routes
app.use('/', indexRouter);
app.use('/cars', carsRouter);
app.use('/users', usersRouter);
app.use('/', bidsRouter);

app.listen(port, () => {
    console.log(`Express is listening on on port: ${port}`);
});