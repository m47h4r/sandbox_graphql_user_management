const fakeDB = [
  {
    id: "1",
    firstName: "Mazhar",
    lastName: "Zandsalimi",
    email: "m47h4r@gmail.com",
    password: "1234",
  },
];

class User {
  constructor({ firstName, lastName, email, password }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  static getByEmail({ email }) {
    for (let user of fakeDB) {
      if (user.email === email) return user;
    }
    return null;
  }
}

module.exports = User;
