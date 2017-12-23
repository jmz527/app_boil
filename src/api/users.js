import axios from 'axios';

const API_URL = 'http://localhost:3030/users';

// API Users static class
export default class ApiUsers {

  static getUsers() {
    return new Promise(resolve => {
      axios.get(API_URL)
        .then((res) => {
          resolve(res.data.users);
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }

  // authenticate the user
  static authenticate(newUser) {
    let user = Object.assign({}, newUser, {"id": "1", "first_name": "James", "last_name": "Rutledge"})

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(user);
      }, 1000);
    })
  }

  // add/edit a user
  static addEdit(user) {
    return new Promise(resolve => {
      axios.post(`${API_URL}/create`, user)
        .then((res) => {
          let newUser = Object.assign({}, user, { id: res.data.user_id })

          resolve(newUser);
        })
        .catch((err) => {
          console.log(err);
        })
    });
  }

  // delete a user
  static delete(userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(userId);
      }, 500);
    });
  }
}