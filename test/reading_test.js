const assert = require('assert');
const User = require('../src/User');

describe('Reading records', () => {

  let user;

  beforeEach((done) => {
    user = new User({ name: 'Joe' });
    user.save()
      .then(() => {
        done();
      });
  });

  it('read a user by name', (done) => {
    User.find({name: 'Joe'}).then((users) => {
      assert(users[0]._id.toString() === user._id.toString());
      done();
    });
  });

  it('read a user by id', (done) => {
    User.findOne({_id: user._id}).then((users) => {
      assert(users.name === 'Joe');
      done();
    });
  });
});