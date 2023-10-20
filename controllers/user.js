import User from '../models/user.js';
import validEmail from '../utils/validateEmail.js';
import validPassword from '../utils/validatePassword.js';

const userController = {
  signUp: (req, res) => {
    const { email, password } = req.body;
    const emailExist = User.getUserByEmail(email);
    if (!emailExist) {
      const isUserEmail = validEmail(email);
      const isUserPassword = validPassword(password);
      if (isUserEmail && isUserPassword) {
        const user = new User(email, password);
        user.addUser();
        console.log('user created');
        res.status(201).redirect('/home');
      } else {
        res.status(409).render('message', {
          title: 'Is not valid',
          message: 'The email or the password is not valid'
        });
      }
    } else {
      res.status(409).render('message', {
        title: 'Email Exist',
        message: 'The email already exist'
      });
    }
  },
  login: (req, res) => {},
  main: (req, res) => {
    res.status(200).render('form');
  }
};

export default userController;
