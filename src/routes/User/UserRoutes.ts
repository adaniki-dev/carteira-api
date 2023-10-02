import express from 'express';

import { UserCreateController } from '@src/controllers/User/userCreate';
import { UserGetController } from '@src/controllers/User/userGet';
import { UserGetAllController } from '@src/controllers/User/userGetAll';

const router = express.Router();

router.post('/users', UserCreateController.execute);
router.get('/users', UserGetAllController.execute);
router.get('/user/:id', UserGetController.execute);


export default router;
