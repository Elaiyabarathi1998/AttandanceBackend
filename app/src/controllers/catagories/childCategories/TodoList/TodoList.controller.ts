import { Request, Response } from 'express';
import ValueModel, { Value } from '../../../../model/childCategory/TodoList/Todo.model';

export default class ValueController {
  async createValue(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const createValue = await ValueModel.create({
        name,
      });

      res.status(201).json({
        message: 'Value Created Successfully',
        value: createValue,
      });
    } catch (error) {
      console.error('Error creating value:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getValues(req: Request, res: Response) {
    try {
      const values = await ValueModel.find();
      res.status(200).json(values);
    } catch (error) {
      console.error('Error fetching values:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateValue(req: Request, res: Response) {
    try {
      const valueId = req.params.id;
      const { name } = req.body;

      const updatedValue = await ValueModel.findByIdAndUpdate(
        valueId,
        { name },
        { new: true }
      );

      if (!updatedValue) {
        res.status(404).json({ message: 'Value not found' });
        return;
      }

      res.status(200).json({
        message: 'Value updated successfully',
        value: updatedValue,
      });
    } catch (error) {
      console.error('Error updating value:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteValue(req: Request, res: Response) {
    try {
      const valueId = req.params.id;

      const deletedValue = await ValueModel.findByIdAndDelete(valueId);

      if (!deletedValue) {
        res.status(404).json({ message: 'Value not found' });
        return;
      }

      res.status(200).json({
        message: 'Value deleted successfully',
        value: deletedValue,
      });
    } catch (error) {
      console.error('Error deleting value:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
