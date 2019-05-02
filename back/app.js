const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users');

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('json spaces', 2);


app.use('/api/users', usersRouter);

app.listen(process.env.PORT || '3000');