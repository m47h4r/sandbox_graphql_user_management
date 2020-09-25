const fakeDB = [
  {
    id: "1",
    firstName: "Mazhar",
    lastName: "Zandsalimi",
    email: "m47h4r@gmail.com",
    password: "1234",
  },
  {
    id: "2",
    firstName: "Someone",
    lastName: "Someonei",
    email: "some@mail.com",
    password: "4321",
  },
];

class User {
  constructor({ firstName, lastName, email, password }) {
    this.id = fakeDB.length + 1;
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

  static getAll() {
    return fakeDB;
  }

  isAnyFieldEmpty() {
    if (this.firstName.length <= 0) return true;
    if (this.lastName.length <= 0) return true;
    if (this.email.length <= 0) return true;
    if (this.password.length <= 0) return true;
    return false;
  }

  save() {
    if (this.isAnyFieldEmpty()) return;
    const userToSave = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };
    fakeDB.push(userToSave);
    return userToSave;
  }
}

module.exports = User;
