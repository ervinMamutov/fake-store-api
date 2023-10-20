import express from 'express';

import storeController from '../controllers/store.js';

const router = express.Router();

router.get('/', storeController.home);

export default router;
