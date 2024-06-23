import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the interface for the Value model
export interface Value extends Document {
  name: string;
}

// Create a schema for the Value model
const valueSchema: Schema<Value> = new Schema({
  name: {
    type: String,
    required: true,
  },
});

// Create the Value model
const ValueModel: Model<Value> = mongoose.model<Value>('Value', valueSchema);

export default ValueModel;
