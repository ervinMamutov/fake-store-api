import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import logger from './middleware/logger.js';
import userRoutes from './routes/user.js';
import storeRoutes from './routes/store.js';

// env configuration
dotenv.config();
const PORT = process.env.PORT || 3008;

// constrict path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// initialization express
const app = express();

// parser body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// session initialization
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true
    }
  })
);

// use logger
app.use(logger);

// set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

// server static folder
app.use(express.static(path.join(PATH, 'public')));

// use routes
app.use(userRoutes);
app.use(storeRoutes);

// handle 404
app.use('*', (req, res) => {
  res.status(404).render('404', {
    title: '404',
    message: 'user not found'
  });
});

// use listener
app.listen(PORT, () => {
  console.log(`Server is already started to port ${PORT}`);
});
