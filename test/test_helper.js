const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://test:test@ds147072.mlab.com:47072/playgrounddb', { useMongoClient: true});
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  const { users } = mongoose.connection.collections;
  users.drop(() => {
    done();
  });
});