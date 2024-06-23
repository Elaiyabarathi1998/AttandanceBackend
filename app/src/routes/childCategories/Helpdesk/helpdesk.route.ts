import { Router } from 'express';
import EmployeeQueryController from '../../../controllers/catagories/childCategories/Helpdesk/helpdesk.controller';

class EmployeeQueryRoutes {
  router = Router();
  controller = new EmployeeQueryController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new Employee Query
    this.router.post('/', this.controller.createEmployeeQuery);

    // Retrieve all Employee Queries
    this.router.get('/', this.controller.getEmployeeQueries);

    // Update an Employee Query by ID
    this.router.put('/:employeeQueryId', this.controller.updateEmployeeQuery);

    // Delete an Employee Query by ID
    this.router.delete('/:id', this.controller.deleteEmployeeQuery);
  }
}

export default new EmployeeQueryRoutes().router;
