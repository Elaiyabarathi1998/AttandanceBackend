import mongoose, { Document, Model, Schema } from 'mongoose';

export interface PayrollDocument extends Document {
  employeeName: String;
  startDate: String;
  endDate: String;
  totalHours: String;
  paymentDate:String;
  hourPay: String;
  grossPay: String;
}

const payrollSchema: Schema<PayrollDocument> = new Schema({
  employeeName: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  totalHours: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: String,
    required: true,
  },
  hourPay: {
    type: String,
    required: true,
  },
  grossPay: {
    type: String,
    required: true,
  },
});

const PayrollModel: Model<PayrollDocument> = mongoose.model<PayrollDocument>('Payroll', payrollSchema);

export default PayrollModel;
