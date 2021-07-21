const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('./config')
const bodyParser = require('body-parser')
// const authRouter = require('./routes/auth')

const app = express();

// for parsing application/json
app.use(cors())
app.use(bodyParser.json())

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));

// Get the Javascript in the browser
app.use("/images", express.static("./utils/images"));
app.use("/styles", express.static("./utils/css"));

// app.use('/', indexRouter)
require('./routes')(app)

mongoose.connect(config.mongo.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
 },
 function (err, res) {
  if (err) {
   console.log ('ERROR connecting to MongoDB : ' + err);
  }
  else {
  console.log ('Connected to: MongoDB');
  }
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  // we're connected!
  app.listen(config.port)
  console.log(`app started at port ${config.port}`);
  console.log(`app connected to ${config.mongo.uri}`)
});
