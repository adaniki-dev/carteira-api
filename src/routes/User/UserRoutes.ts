import express from 'express';
import { UserController } from '@src/controllers/User/userController';

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);


export default router;
