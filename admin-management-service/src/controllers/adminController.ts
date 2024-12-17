import { Request, Response } from 'express';
import * as adminService from '../services/adminService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await adminService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await adminService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

// Additional controller functions can be added here
