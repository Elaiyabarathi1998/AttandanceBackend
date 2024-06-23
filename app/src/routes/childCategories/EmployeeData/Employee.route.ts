import { Router } from 'express';
import EmployeeController from '../../../controllers/catagories/childCategories/EmployeeData/EmployeeCRUD.controller'; // Import your controller
import { uploadMiddleware}  from '../../../middleware/UploadMiddlewareProfile';

class EmployeeRoutes {
  router = Router();
  controller = new EmployeeController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new employee
    this.router.post('/',this.controller.createEmployee);

    // Retrieve all employees
    this.router.get('/',this.controller.getAllEmployees);

    // Retrieve a single employee with ID
    this.router.get('/:employeeId', this.controller.getEmployee);

    // Update an employee with ID
    this.router.put('/:employeeId',uploadMiddleware.single('image'), this.controller.updateEmployee);

    // Delete an employee with ID
    this.router.delete('/:employeeId', this.controller.deleteEmployee);
  }
}

export default new EmployeeRoutes().router;
