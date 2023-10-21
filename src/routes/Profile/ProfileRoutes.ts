import express from 'express';
import { ProfileControllerCreate } from '@src/controllers/Profile/ProfileCreate';
import { ProfileControllerGetAll } from '@src/controllers/Profile/ProfileGetAll';
import { ProfileControllerGet } from '@src/controllers/Profile/ProfileGet';

const router = express.Router();

router.post('/profile', ProfileControllerCreate.createProfile);
router.get('/profiles/:id', ProfileControllerGetAll.getAllProfiles);
router.get('/profile/:id', ProfileControllerGet.getProfile);

export default router;