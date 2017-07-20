const assert = require('assert');
const User = require('../src/User');

describe('Creating records', () => {

  let user;

  beforeEach((done) => {
    user = new User({ name: 'Joe' });
    user.save()
      .then(() => {
        done();
      });
  });

  it('detele a user', (done) => {
    user.remove()
      .then(() => {
        return User.findOne({name: 'Joe'});
      })
      .then((user) => {
        assert(user === null);
        done();
    });
  });
});