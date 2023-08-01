// const mongoose = require('mongoose');

// mongoose
//   .connect('mongodb://localhost/blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Established a connection to the database'))
//   .catch((err) =>
//     console.log('Something went wrong when connecting to the database', err)
//   );

const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://blog:b7seY5Z0IFCWBmU6@cluster0.hpx3ezr.mongodb.net/';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Established a connection to the database'))
  .catch((err) =>
    console.log('Something went wrong when connecting to the database', err)
  );
