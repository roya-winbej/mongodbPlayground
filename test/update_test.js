const assert = require('assert');
const User = require('../src/User');

describe('Updating records', () => {

  let user;

  beforeEach((done) => {
    user = new User({ name: 'Joe' });
    user.save()
      .then(() => {
        done();
      });
  });

  it('update a user', (done) => {
    User.update({name: 'Joe'}, {name: 'Alex'})
      .then(() => {
        return User.findOne({name: 'Alex'});
      })
      .then((user) => {
        assert(user.name === 'Alex');
        done();
      });
  });
});