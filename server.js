const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3000;
require('./config/database');
//require config file
const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');

//require route variables

const app = express();

//app middleware
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'))
//use routes
app.use('/', indexRouter);
app.use('/cars', carsRouter);

app.listen(port, () => {
    console.log(`Express is listening on on port: ${port}`);
});