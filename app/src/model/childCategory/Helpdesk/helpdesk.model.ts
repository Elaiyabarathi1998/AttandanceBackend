import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the interface for the employee query records
export interface EmployeeQuery extends Document {
  employeeName: string;
  queryType: string;
  message: string;
  dateTime: String;
}

// Create a schema for the EmployeeQuery model
const employeeQuerySchema: Schema<EmployeeQuery> = new Schema({
  employeeName: {
    type: String,
    required: true,
  },
  queryType: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
});

// Create the EmployeeQuery model
const EmployeeQueryModel: Model<EmployeeQuery> = mongoose.model<EmployeeQuery>('EmployeeRequest', employeeQuerySchema);

export default EmployeeQueryModel;
