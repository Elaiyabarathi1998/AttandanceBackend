import { Application } from "express";
import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorial.routes";
import routerAdmin from './adminAuth.route'
// import userSignUpRoute from "./userSighUp.route";
// import userSignInRoute from "./userSignIn.route";
import CatagoriesByAdminRoute from "./CatagoriesByAdmin.route";
import EmployeeRoute from "./childCategories/EmployeeData/Employee.route";
import AttendanceRecordRoutes from './childCategories/Attandance/EmployeeAttandance.route'
import PayrollRoutes from './childCategories/payroll/Employeepayroll.route'
import router from "./sighup&login.route";
import EmployeeQueryRoutes from '../routes/childCategories/Helpdesk/helpdesk.route'
import ValueRoutes from '../routes/childCategories/TodoList/TodoList.route'


// Express application setup with Swagger documentation
export default class Routes {
  constructor(app: Application) {
   

    // Use your existing routes
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
    app.use("/admin", routerAdmin);
    app.use("/users", router);
    app.use("/api/category", CatagoriesByAdminRoute);
    app.use("/api/category/employee", EmployeeRoute);
    app.use("/api/category/helpdesk", EmployeeQueryRoutes);
    app.use("/api/admin/attendance-records", AttendanceRecordRoutes);
    app.use("/api/category/payroll", PayrollRoutes);
    app.use("/api/category/todo", ValueRoutes);
  }
}

// export default class Routes {
//   constructor(app: Application) {
//     app.use("/api", homeRoutes);
//     app.use("/api/tutorials", tutorialRoutes);
//     app.use("/admin", routerAdmin );
//     app.use("/users", router);
//     app.use("/api/category", CatagoriesByAdminRoute)
//     app.use("/api/category/employee",EmployeeRoute )
//     app.use("/api/category/helpdesk", EmployeeQueryRoutes )
//     app.use("/api/admin/attendance-records", AttendanceRecordRoutes)
//     app.use("/api/category/payroll",PayrollRoutes )
//     app.use("/api/category/todo",ValueRoutes )
   
//   }
// }
