import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import validEmail from '../utils/validateEmail.js';
import validPassword from '../utils/validatePassword.js';
import hashPassword from '../utils/hashPassword.js';

const userControllers = {
  signUp: (req, res) => {
    const { email, password } = req.body;
    const emailExist = User.getUserByEmail(email);
    if (!emailExist) {
      const isUserEmail = validEmail(email);
      const isUserPassword = validPassword(password);
      if (isUserEmail && isUserPassword) {
        const hashedPassword = hashPassword(password);
        console.log(email, hashedPassword);
        const user = new User(email, hashedPassword);
        user.addUser();
        req.session.isLoggedIn = true;
        req.session.email = email;
        res.status(302).redirect('/');
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
  logIn: (req, res) => {
    const { email, password } = req.body;
    const emailExist = User.getUserByEmail(email);
    if (!emailExist) {
      res.status(401).render('message', {
        title: 'The account not found',
        message: 'The account is not valid'
      });
    } else {
      // check password
      bcrypt.compare(password, emailExist.password, (err, isValid) => {
        if (isValid) {
          req.session.isLoggedIn = true;
          req.session.email = email;
          res.status(302).redirect('/');
        } else {
          res.status(409).render('message', {
            title: 'The account not found',
            message: 'The account not valid'
          });
        }
      });
    }
  },
  signUpForm: (req, res) => {
    res.status(200).render('form', {
      action: '/sign-up',
      button: 'Sign up',
      isLoggedIn: req.session.isLoggedIn
    });
  },
  loginForm: (req, res) => {
    res.status(200).render('form', {
      action: '/login',
      button: 'Log in',
      isLoggedIn: req.session.isLoggedIn
    });
  },
  logOut: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.status(302).redirect('/');
    });
  }
};

export default userControllers;
