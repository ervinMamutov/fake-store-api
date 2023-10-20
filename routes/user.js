import express from 'express';

const router = express.Router();

import userController from '../controllers/user.js';

router.get('/', userController.main);
router.post('/sign-up', userController.signUp);
router.post('/login', userController.login);

export default router;
