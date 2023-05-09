const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT||3400);
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(require('./routes/citas.routes'));

module.exports = app;