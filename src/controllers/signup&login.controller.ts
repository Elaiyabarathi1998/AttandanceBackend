import { Request, Response } from 'express';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/sighup&login.model'
import EmployeeModel from '../model/childCategory/EmployeeData/Employee.model';
import  Value from '../model/childCategory/TodoList/Todo.model';


const JWT_SECRET = '9965738658';

class UserController {
  static async registerUser(req: Request, res: Response) {
   

    try {
      const { username, email, password } = req.body;
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      // const payload = {
      //   user:{
      //     id: user.id,
      //   }
      // };
      // res.json(user)

      jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '3000h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      // console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      // console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      let user = await User.findByIdAndRemove(userId);
      if (!user) {
        res.json({ message: "No such user" });
      }
      res.json({ message: "Deleted Successfully" });
    } catch (err) {
      res.status(500).json({ message: 'Invalid user' });
    }
  };

  //update the user
  static async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const updates = { ...req.body };
    try {
      let user = await User.findOneAndUpdate({ _id: userId }, updates, { new: true });
      if (!user) {
        throw Error("User Not Found");
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ msg: 'Error updating user', err })
    }
  }
  //get by id
  static async getUserByID(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      let user = await User.findById(userId);
      if (!user) {
        throw Error("User not found");
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ msg: 'Error getting user', err })
    }
  }




  static async loginUser(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      // Find the user by username
      

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }

      // Check if the provided password matches the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }


    

      // Create a JSON Web Token (JWT) for the user
      const payload = {

        username: user.username,
        userId:user.id

      };

      jwt.sign(payload, JWT_SECRET, { expiresIn: '3000h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });



    } catch (error) {
      // console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  static async getCurrentUser(req: any, res: any) {
    try {
      const username = req.userData.username; // Assuming your user ID is stored in the 'id' field
      const user = await User.findOne({ username: username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User Profile', userData: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting user' });
    }
  }

  // static async getUserProfileData(req: any, res: any) {
  //   try {
  //     const username = req.userData.username;
  
  //     // Find the user by username
  //     const user = await User.findOne({ username: username });
  
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  
  //     // Assuming you have a direct reference to the employee in the user model
  //     const employee = await EmployeeModel.findOne({ username: username });
  
  //     if (!employee) {
  //       return res.status(404).json({ message: 'Employee not found' });
  //     }
  
  //     res.json({ message: 'User and Employee Profile', userData: user, employeeData: employee });
  //     console.log(employee)
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Error getting user and employee data' });
  //   }
  // }


 
  static async getUserProfileData(req: any, res: any) {
    try {
      const username = req.userData.username;

      // Find the user by username
      const user = await User.findOne({ username: username });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Assuming you have a direct reference to the employee in the user model
      const employee = await EmployeeModel.findOne({ username: username });

      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }

      // Fetch TODO list data using the Value model
      const todoList = await Value.find(); // This fetches all TODO items, modify as needed

      res.json({
        message: 'User, Employee, and TODO List Profile',
        userData: user,
        employeeData: employee,
        todoListData: todoList,
      });

      console.log(employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting user, employee, and TODO list data' });
    }
  }
}

    

  




export default UserController;