const assert = require('assert');
const User = require('../src/User');

describe('Validations records', () => {
  it('should require user name', () => {
    const user = new User({name: undefined});

    const validationMsg = user.validateSync();

    const { message } = validationMsg.errors.name;

    assert('User name cant be blank' === message);
  });

  it('should validate user name length', () => {
    const user = new User({name: 'So'});
    const validationMgs = user.validateSync();
    const { message } = validationMgs.errors.name;

    assert('User name must be greater then 2 characters' === message);
  });

  it('should prevent user from saving', (done) => {
    const user = new User({name: 'So'});

    user.save()
      .catch((validationMessages) => {
        const { message } = validationMessages.errors.name; 
        assert(message === 'User name must be greater then 2 characters');
        done();
      })
  });
});