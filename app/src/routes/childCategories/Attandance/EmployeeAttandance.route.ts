// import { Router } from "express";
// import AttendanceRecordController from '../../../controllers/catagories/childCategories/Attandance copy/EmployeeAttandanceCRUD.controller' 
// class AttendanceRecordRoutes {
//   router = Router();
//   CreateController = new AttendanceRecordController();
//   deleteController = new AttendanceRecordController();
//   updateController = new AttendanceRecordController();
//   getAllController = new AttendanceRecordController();

//   constructor() {
//     this.initializeRoutes();
//   }

//   initializeRoutes() {
//     // Create a new Attendance Record
//     this.router.post("/", this.CreateController.setAttendanceRecord);

//     // Retrieve all Attendance Records
//     this.router.get("/", this.getAllController.getAllAttendanceRecords);

//     // Update an Attendance Record with id
//     this.router.put("/:recordId", this.updateController.updateAttendanceRecord);

//     // Delete an Attendance Record with id
//     this.router.delete("/:recordId", this.getAllController.deleteAttendanceRecord);
//   }
// }

// export default new AttendanceRecordRoutes().router;





import { Router } from 'express';
import AttendanceRecordController from '../../../controllers/catagories/childCategories/Attandance copy/EmployeeAttandanceCRUD.controller'; // Update the path accordingly



class AttendanceRecordRoutes {
  router = Router();
  controller = new AttendanceRecordController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new Attendance Record
    this.router.post('/', this.controller.create);

    // Retrieve all Attendance Records
    this.router.get('/', this.controller.findAll);

    // Retrieve a single Attendance Record with id
    this.router.get('/:id', this.controller.findOne);

    // Update an Attendance Record with id
    this.router.put('/:id', this.controller.update);

    // Delete an Attendance Record with id
    this.router.delete('/:id', this.controller.delete);
  }
}

export default new AttendanceRecordRoutes().router;




    
 