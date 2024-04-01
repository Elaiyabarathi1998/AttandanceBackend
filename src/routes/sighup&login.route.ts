import express from 'express';

import UserController from '../controllers/signup&login.controller';
import  AuthMiddleware  from '../middleware/authmiddleware';

const router = express.Router();

router.post('/signup',UserController.registerUser);
router.get('/', UserController.getAllUsers);
router.post('/login', UserController.loginUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.get('/:id', AuthMiddleware, UserController.getUserByID);
// Apply the auth middleware to the user-data route
router.get('/api/profile', AuthMiddleware, UserController.getCurrentUser);
router.get('/api/profiledetails', AuthMiddleware, UserController.getUserProfileData);

export default router;