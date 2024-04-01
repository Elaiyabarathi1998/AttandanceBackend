
import { Request, Response } from 'express';
import AttendanceRecordModel, { AttendanceRecord } from '../../../../model/childCategory/attandance/EmployeeAttandance.model';

export default class AttendanceRecordController {
  async create(req: Request, res: Response) {
    try {
      const attendanceRecordData: AttendanceRecord = req.body;
      const createdAttendanceRecord = await AttendanceRecordModel.create(attendanceRecordData);

      res.status(201).json({
        message: 'Record created successfully',
        data: createdAttendanceRecord,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal Server Error!',
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const allRecords = await AttendanceRecordModel.find();

      res.status(200).json({
        message: 'All records retrieved successfully',
        data: allRecords,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal Server Error!',
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const recordId = req.params.id;
      const foundRecord = await AttendanceRecordModel.findById(recordId);

      if (!foundRecord) {
        return res.status(404).json({
          message: 'Record not found',
        });
      }

      res.status(200).json({
        message: 'Record retrieved successfully',
        data: foundRecord,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal Server Error!',
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const recordId = req.params.id;
      const updateData: AttendanceRecord = req.body;
      const updatedRecord = await AttendanceRecordModel.findByIdAndUpdate(recordId, updateData, { new: true });

      if (!updatedRecord) {
        return res.status(404).json({
          message: 'Record not found',
        });
      }

      res.status(200).json({
        message: 'Record updated successfully',
        data: updatedRecord,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal Server Error!',
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const recordId = req.params.id;
      const deletedRecord = await AttendanceRecordModel.findByIdAndDelete(recordId);

      if (!deletedRecord) {
        return res.status(404).json({
          message: 'Record not found',
        });
      }

      res.status(200).json({
        message: 'Record deleted successfully',
        data: deletedRecord,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal Server Error!',
      });
    }
  }
}

