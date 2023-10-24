import express from 'express';
import authenticateToken from '@src/middleware/authentication';
import { ProfileControllerCreate } from '@src/controllers/Profile/ProfileCreate';
import { ProfileControllerGetAll } from '@src/controllers/Profile/ProfileGetAll';
import { ProfileControllerGet } from '@src/controllers/Profile/ProfileGet';

const router = express.Router();

router.post('/profile', authenticateToken, ProfileControllerCreate.createProfile);
router.get('/profiles/:id', authenticateToken, ProfileControllerGetAll.getAllProfiles);
router.get('/profile/:id', authenticateToken, ProfileControllerGet.getProfile);

export default router;