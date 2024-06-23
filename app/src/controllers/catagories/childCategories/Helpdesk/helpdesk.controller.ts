import { Request, Response } from 'express';
import EmployeeQueryModel, { EmployeeQuery } from '../../../../model/childCategory/Helpdesk/helpdesk.model';
import mongoose from 'mongoose';

export default class EmployeeQueryController {
  async createEmployeeQuery(req: Request, res: Response) {
    try {
      const { employeeName, queryType, message, dateTime } = req.body;

      const createEmployeeQuery = await EmployeeQueryModel.create({
        employeeName,
        queryType,
        message,
        dateTime,
      });

      res.status(201).json({
        message: 'Employee Query Created Successfully',
        employeeQuery: createEmployeeQuery,
      });
    } catch (error) {
      console.error('Error creating employee query:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getEmployeeQueries(req: Request, res: Response) {
    try {
      const employeeQueries = await EmployeeQueryModel.find();
      res.status(200).json(employeeQueries);
    } catch (error) {
      console.error('Error fetching employee queries:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateEmployeeQuery(req: Request, res: Response) {
    try {
      const employeeQueryId = req.params.id;
      const { employeeName, queryType, message, dateTime } = req.body;

      const updatedEmployeeQuery = await EmployeeQueryModel.findByIdAndUpdate(
        employeeQueryId,
        { employeeName, queryType, message, dateTime },
        { new: true }
      );

      if (!updatedEmployeeQuery) {
        res.status(404).json({ message: 'Employee Query not found' });
        return;
      }

      res.status(200).json({
        message: 'Employee Query updated successfully',
        employeeQuery: updatedEmployeeQuery,
      });
    } catch (error) {
      console.error('Error updating employee query:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteEmployeeQuery(req: Request, res: Response) {
    try {
      const employeeQueryId = req.params.id;
  
      if (!mongoose.Types.ObjectId.isValid(employeeQueryId)) {
        res.status(400).json({ message: 'Invalid Employee Query ID' });
        return;
      }
  
      const deletedEmployeeQuery = await EmployeeQueryModel.findByIdAndDelete(employeeQueryId);
  
      if (!deletedEmployeeQuery) {
        res.status(404).json({ message: 'Employee Query not found' });
        return;
      }
  
      res.status(200).json({
        message: 'Employee Query deleted successfully',
        employeeQuery: deletedEmployeeQuery,
      });
    } catch (error) {
      console.error('Error deleting employee query:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
}
