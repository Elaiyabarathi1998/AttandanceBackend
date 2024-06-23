
import express from 'express';
import { body } from 'express-validator';
import AdminController from '../controllers/adminAuth.controller';


import { Request, Response } from 'express';

import authAdminMiddleware from '../middleware/adminauthmiddleware'


const routerAdmin = express.Router();

routerAdmin.post('/signup',AdminController.registerAdmin);
routerAdmin.get('/',AdminController.getAllAdmins);


routerAdmin.post('/login',AdminController.loginAdmin);
routerAdmin.get('/api/profile', authAdminMiddleware, AdminController.getCurrentUser);



export default routerAdmin;
