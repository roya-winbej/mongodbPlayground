const assert = require('assert');
const User = require('../src/User');

describe('Test sub documents', () => {

  it('should save post', (done) => {
    let user = new User({
      name: 'Joe',
      posts: [{title: 'Awesome title'}],
    });
    
    user.save()
      .then(() => {
        return User.findOne({name: 'Joe'});
      })
      .then((user) => {
        assert(user.posts[0].title === 'Awesome title');
        done();
      })
      .catch((err) => {
         console.log(err);
      })
  });
});