const assert = require('assert');
const User = require('../src/User');

describe('Updating records', () => {

  let user;

  beforeEach((done) => {
    user = new User({ name: 'Joe', postCount: 0 });
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

  it('increment a user post count by one', (done) => {
    User.update({name: 'Joe'}, { $inc: { postCount: 1 }})
      .then(() => {
        return User.findOne({name: 'Joe'});
      })
      .then((user) => {
        assert(user.postCount === 1);
        done();
      });
  });
});