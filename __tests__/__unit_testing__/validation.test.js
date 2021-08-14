

const {validation}  = require('../../components/utility/validation')

test('That a valid .co.uk email returns true', () => {
    expect(validation.default("yasir","yasir@aston.ac.uk","Password11")).toBe(true);
  });

  test('that the password is not valid since its shorter than 8 characters', () => {
    expect(validation.default("yasir","yasir@aston.ac.uk","Pd11")).toBe(false);
  });

  test('that the password is not valid since its missing a capital letter', () => {
    expect(validation.default("yasir","yasir@aston.ac.uk","passwrddd11")).toBe(false);
  });

  test('that the username is not valid since it contains special characters', () => {
    expect(validation.default("ya$ir","yasir@aston.ac.uk","passwrddd11")).toBe(false);
  });

  test('that the password is not valid since its missing a capital letter', () => {
    expect(validation.default("yasir","yasir@aston.ac.uk","passwrddd11")).toBe(false);
  });

  test('that the email is not valid since it contains special letters', () => {
    expect(validation.default("yasir","yasir@as£on.ac.uk","passwrddd11")).toBe(false);
  });

  test('that the email is not valid since it contains two @ signs', () => {
    expect(validation.default("yasir","yasir@asto@n.ac.uk","passwrddd11")).toBe(false);
  });


  