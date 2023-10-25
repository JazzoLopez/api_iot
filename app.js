const express = require ('express');

const morgan = require ('morgan');

const sensovaluesRouter = require ('./src/routes/sensovalues.router');

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/api/',sensovaluesRouter);

module.exports = app;
