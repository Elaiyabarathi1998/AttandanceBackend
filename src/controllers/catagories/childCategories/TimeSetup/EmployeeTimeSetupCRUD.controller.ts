// import { Request, Response } from 'express';
// import TimeSetupModel, { TimeSetup } from '../../../../model/childCategory/TimeSetup/EmployeeTimeSetup.model';

// export default class TimeSetupController {
//   async createTimeSetup(req: Request, res: Response) {
//     try {
//       const { date, time } = req.body;

//       const createTimeSetup = await TimeSetupModel.create({ date, time });

//       res.status(201).json({
//         message: 'Time Setup Created Successfully',
//         timeSetup: createTimeSetup,
//       });
//     } catch (error) {
//       console.error('Error creating time setup:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }

//   async getTimeSetups(req: Request, res: Response) {
//     try {
//       const timeSetups = await TimeSetupModel.find();
//       res.status(200).json(timeSetups);
//     } catch (error) {
//       console.error('Error fetching time setups:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }

//   async updateTimeSetup(req: Request, res: Response) {
//     try {
//       const timeSetupId = req.params.id;
//       const { date, time } = req.body;

//       const updatedTimeSetup = await TimeSetupModel.findByIdAndUpdate(
//         timeSetupId,
//         { date, time },
//         { new: true }
//       );

//       if (!updatedTimeSetup) {
//         res.status(404).json({ message: 'Time Setup not found' });
//         return;
//       }

//       res.status(200).json({
//         message: 'Time Setup updated successfully',
//         timeSetup: updatedTimeSetup,
//       });
//     } catch (error) {
//       console.error('Error updating time setup:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }

//   async deleteTimeSetup(req: Request, res: Response) {
//     try {
//       const timeSetupId = req.params.id;

//       const deletedTimeSetup = await TimeSetupModel.findByIdAndDelete(timeSetupId);

//       if (!deletedTimeSetup) {
//         res.status(404).json({ message: 'Time Setup not found' });
//         return;
//       }

//       res.status(200).json({
//         message: 'Time Setup deleted successfully',
//         timeSetup: deletedTimeSetup,
//       });
//     } catch (error) {
//       console.error('Error deleting time setup:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
// }
