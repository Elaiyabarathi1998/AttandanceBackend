import { Request, Response } from 'express';
import PayrollModel, { PayrollDocument } from '../../../../model/childCategory/payroll/EmployeePayroll.model';




export default class PayrollController {
  async create(req: Request, res: Response) {
    try {
      const {
        employeeName,
        startDate,
        endDate,
        totalHours,
        paymentDate,
        hourPay,
        grossPay,
      } = req.body;

      const payrollData: PayrollDocument = new PayrollModel({
        employeeName,
        startDate,
        endDate,
        totalHours,
        paymentDate,
        hourPay,
        grossPay,
      });

      const savedPayroll = await payrollData.save();

      res.status(201).json({
        message: "Payroll created successfully",
        payroll: savedPayroll,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const payrolls = await PayrollModel.find();
      res.status(200).json({
        message: "Find all payrolls successfully",
        payrolls,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const payrollId = req.params.id;
      const payroll = await PayrollModel.findById(payrollId);

      if (!payroll) {
        return res.status(404).json({
          message: "Payroll not found",
        });
      }

      res.status(200).json({
        message: "Find one payroll successfully",
        payroll,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const payrollId = req.params.id;
      const updatedData = req.body;

      const updatedPayroll = await PayrollModel.findByIdAndUpdate(
        payrollId,
        updatedData,
        { new: true }
      );

      if (!updatedPayroll) {
        return res.status(404).json({
          message: "Payroll not found",
        });
      }

      res.status(200).json({
        message: "Payroll updated successfully",
        payroll: updatedPayroll,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const payrollId = req.params.id;
      const deletedPayroll = await PayrollModel.findByIdAndDelete(payrollId);

      if (!deletedPayroll) {
        return res.status(404).json({
          message: "Payroll not found",
        });
      }

      res.status(200).json({
        message: "Payroll deleted successfully",
        payroll: deletedPayroll,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  }
}
