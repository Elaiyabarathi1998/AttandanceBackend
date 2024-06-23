import { Router } from 'express';
import ValueController from '../../../controllers/catagories/childCategories/TodoList/TodoList.controller';


class ValueRoutes {
  router = Router();
  controller = new ValueController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new Value
    this.router.post('/', this.controller.createValue);

    // Retrieve all Values
    this.router.get('/', this.controller.getValues);

    // Update a Value by ID
    this.router.put('/:id', this.controller.updateValue);

    // Delete a Value by ID
    this.router.delete('/:id', this.controller.deleteValue);
  }
}

export default new ValueRoutes().router;

