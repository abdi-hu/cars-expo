const express = require('express');
const morgan = require('morgan');
const port = 3000;
require('./config/database');
//require config file
const indexRouter = require('./routes/index');

//require route variables

const app = express();

//app middleware
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//use routes
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Express is listening on on port: ${port}`);
});