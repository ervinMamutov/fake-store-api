import { v4 as newId } from 'uuid';
import usersData from '../data/usersData.js';

class User {
  constructor(email, password) {
    this.id = newId();
    this.email = email;
    this.password = password;
  }

  static getUserByEmail = (email) => {
    return usersData.find((user) => user.email === email);
  };

  addUser() {
    usersData.push(this);
  }
}

export default User;
