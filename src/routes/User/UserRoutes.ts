import express from 'express';
import { UserControllerCreate } from '@src/controllers/User/userCreate';
import { UserControllerGet } from '@src/controllers/User/userGet';


const router = express.Router();

router.post('/user', UserControllerCreate.createUser);
router.get('/user/:id', UserControllerGet.getUser);

export default router;
