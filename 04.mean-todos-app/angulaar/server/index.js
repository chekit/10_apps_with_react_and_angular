const express = require('express');
const path = require('path');
const json = require('body-parser/lib/types/json');
const urlencoded = require('body-parser/lib/types/urlencoded');
const cors = require('cors')

const app = express();

const index = require('./routes');
const todos = require('./routes/todos');

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'client')));

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(cors());

// controllers
app.use('/', index);
app.use('/api/v1', todos);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});