// CategoriesbyAdmin.model.ts
import mongoose, { Document, Model, Schema } from "mongoose";
 
interface ICategory extends Document {
  categoryname: string;
  deleted: boolean;
}
 
const categorySchema: Schema<ICategory> = new Schema({
  categoryname: {
    type: String,
    required: true,
  },
 
  deleted: {
    type: Boolean,
    default: false, // Not deleted by default
  },
 
},
{ timestamps: true });
 
 
const CategoryModel: Model<ICategory> = mongoose.model<ICategory>("Categoryadd", categorySchema);
 
export default CategoryModel;
 