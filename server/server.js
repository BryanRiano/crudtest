const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');
var globals = config['database'];
mongoose.Promise = global.Promise;

mongoose.connect(globals.prod)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(bodyParser.json());

//routes
require('./routes/usuario')(app);

app.listen(3000, () => {
    console.log('Server started! on port 3000');
});
