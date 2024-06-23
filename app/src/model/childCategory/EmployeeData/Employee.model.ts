import mongoose, { Document, Model, Schema, Types } from 'mongoose';

export interface EmployeeDataDocument extends Document {
  username: string;
  position: string;
  rate: number;
  address: string;
  email: string;
  contact: string;
  DOB: String;
  status: string;
  // categories: mongoose.Schema.Types.ObjectId; // Array of category references
  // image: string; // Array of image URLs
  deleted: boolean
}

const EmployeeDataSchema: Schema<EmployeeDataDocument> = new Schema({
  username: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  
  deleted: {
    type: Boolean,
    default: false,
},
}, { timestamps: true });

const EmployeeModel: Model<EmployeeDataDocument> = mongoose.model<EmployeeDataDocument>('Employee', EmployeeDataSchema);

export default EmployeeModel;
