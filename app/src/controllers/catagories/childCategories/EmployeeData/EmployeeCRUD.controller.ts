import { Request, Response } from 'express';
import EmployeeModel, { EmployeeDataDocument } from '../../../../model/childCategory/EmployeeData/Employee.model';
import mongoose from 'mongoose';



function checkMissingFields(fields: string[], requiredFields: string[]): string[] {
  const missingFields: string[] = [];
  for (const field of requiredFields) {
    if (!fields.includes(field)) {
      missingFields.push(field);
    }
  }
  return missingFields;
}

export default class EmployeeController {
  
  // Create an employee
createEmployee = async (req: Request, res: Response) => {
   try {
    const { username, position, rate, address, email,  contact, DOB, status } = req.body;
    // const files = req.file;
    // const fields = Object.keys(req.body);

    const requiredFields: string[] = ['name', 'position', 'rate', 'address', 'email', 'contact', 'DOB', 'status',
    //  'categories'
    ];
    // const missingFields = checkMissingFields(fields, requiredFields);

    // if (missingFields.length > 0) {
    //   return res.status(400).json({
    //     message: `Validation error: Missing required fields (${missingFields.join(', ')}) and/or image files.`,
    //   });
    // }

    // let image="";
    // if (req.file) {
    //   image = req.file.filename; // Get the uploaded image
    // }
    // console.log({image});
    const employeeData = new EmployeeModel({
      username,
      position,
      rate,
      address,
      email,
      contact,
      DOB,
      status,
      // image,
    });

    const createdEmployee = await employeeData.save();

    res.status(201).json({
      message: 'Employee Created Successfully',
      employee: createdEmployee,
    });
  } catch (error) {
  //   res.status(500).json({ error: 'Server error' });
  }
}


  // Read all employees
  getAllEmployees = async (req: Request, res: Response) => {
    try {
      const employees = await EmployeeModel.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  getEmployee = async (req: Request, res: Response) => {
    try {
      const employeeId = req.params.employeeId; // Assuming you have the employee ID in the request parameters

      const employee = await EmployeeModel.findById(employeeId);

      if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
      }

      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  // Update an employee by ID
  // Update an employee by ID
updateEmployee = async (req: Request, res: Response) => {
  try {
    const employeeId = req.params.employeeId;

    let updatedEmployeeData = { ...req.body }; // Initialize it with the request body

    if (req.file) {
      // Update the employee's img_url if a file is uploaded
      updatedEmployeeData.image = req.file.filename;
      // res.send("image entered")
    }

    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      employeeId,
      updatedEmployeeData,
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({
      message: 'Employee Updated Successfully',
      employee: updatedEmployee,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

  

  


  // Delete an employee by ID
  deleteEmployee = async (req: Request, res: Response) => {
    try {
      const employeeId = req.params.employeeId; // Assuming you have the employee ID in the request parameters

      const deletedEmployee = await EmployeeModel.findByIdAndDelete(employeeId);

      if (!deletedEmployee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
      }

      res.status(200).json({ message: 'Employee deleted successfully', employee: deletedEmployee });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
}




