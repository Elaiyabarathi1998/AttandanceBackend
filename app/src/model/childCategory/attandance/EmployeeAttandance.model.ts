

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
  // employeeUserId:ObjectId[]
  username:String;
  status: 'active' | 'inactive';
}

// Create a schema for the AttendanceRecord model
const attendanceRecordSchema: Schema<AttendanceRecord> = new Schema({
 
  date: {
    type: String,
    required: true,
  },
  
  username: 
    {
      type: String,
      required:true,
    },
  
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

