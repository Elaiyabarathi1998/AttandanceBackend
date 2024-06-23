import { Router } from 'express';
import PayrollController from '../../../controllers/catagories/childCategories/payroll/EmployeepayrollCRUD.controller';



class PayrollRoutes {
  router = Router();
  controller = new PayrollController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new Payroll entry
    this.router.post("/", this.controller.create);

    // Retrieve all Payroll entries
    this.router.get("/", this.controller.findAll);

    // Retrieve a single Payroll entry by id
    this.router.get("/:id", this.controller.findOne);

    // Update a Payroll entry by id
    this.router.put("/:id", this.controller.update);

    // Delete a Payroll entry by id
    this.router.delete("/:id", this.controller.delete);
  }
}

export default new PayrollRoutes().router;

