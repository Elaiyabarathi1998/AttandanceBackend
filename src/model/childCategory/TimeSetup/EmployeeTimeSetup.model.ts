

import mongoose, { Document, Model,ObjectId, Schema } from 'mongoose';


// Define the interface for the check-in/check-out records
export interface AttendanceRecord extends Document {
 
  date: String;
  checkInMorning: String;
  checkOutMorning: String;
  checkInAfternoon: String;
  checkOutAfternoon: String;
  totalHours: number;
  // categoryId: ObjectId[]
  // employeeId:ObjectId[]
  status: 'active' | 'inactive';
}

// Create a schema for the AttendanceRecord model
const attendanceRecordSchema: Schema<AttendanceRecord> = new Schema({
 
  date: {
    type: String,
    required: true,
  },
  // categoryId: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Categoryadd',
  //   },
  // ], 
  //  employeeId: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Employee',
  //   },
  // ],
  checkInMorning: {
    type: String,
  },
  checkOutMorning: {
    type: String,
  },
  checkInAfternoon: {
    type: String,
  },
  checkOutAfternoon: {
    type: String,
  },
  totalHours: {
    type: Number,
  },
  status: {
    type: String,
    // enum: ['active', 'inactive'],
    required: true,
  },
});

// Create the AttendanceRecord model
const AttendanceRecordModel: Model<AttendanceRecord> = mongoose.model<AttendanceRecord>('AttendanceRecord', attendanceRecordSchema);

export default AttendanceRecordModel;

