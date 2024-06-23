// CatagoriesByAdmin.controller.ts
import { Request, Response } from 'express';
import CategoryModel from '../../model/CategoriesbyAdmin.model';

export default class CategoryController {
  async addCategory(req: Request, res: Response) {
    try {
      const { categoryname } = req.body;

      const createcat = await CategoryModel.create({
        categoryname,
      });

      res.status(201).json({
        message: 'Category Entered Successfully',
        category: createcat,
      });
    } catch (err) {
      console.error('Error creating category:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const categories = await CategoryModel.find();
      res.status(200).json(categories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
