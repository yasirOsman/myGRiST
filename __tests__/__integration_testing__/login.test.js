

const { Signin } = require('../../components/views/Signin');

test('log into the system using a registered account', () => {
    expect(Signin.userLogin("yasir@live.nl","Yasir1234","signin")).toBe(true);
  });