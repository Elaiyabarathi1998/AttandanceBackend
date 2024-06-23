import { Router } from 'express';
import CategoryController from '../controllers/catagories/CategoriebyAdmin.controller';
import adminAuthenticateMiddleware from '../middleware/adminauthmiddleware';

class CategoryRoutes {
  router = Router();
  categoryCreateController = new CategoryController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new category
    this.router.post('/', adminAuthenticateMiddleware, this.categoryCreateController.addCategory);

    // Retrieve all categories
    this.router.get('/', adminAuthenticateMiddleware, this.categoryCreateController.getCategories);
  }
}

export default new CategoryRoutes().router;
