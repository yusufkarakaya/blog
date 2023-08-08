const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = 8000;

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cookieParser());
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.static(path.join(__dirname, 'client/build')));

require('./config/mongoose.config');
require('dotenv').config();

require('./routes/user.routes')(app);
require('./routes/post.routes')(app);

app.listen(port, () =>
  console.log(`The server is all fired up on port ${port}`)
);
