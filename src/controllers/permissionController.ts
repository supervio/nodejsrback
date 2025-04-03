import { Request, Response } from 'express';
import Permission from '../models/Permission';

export const createPermission = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  try {
    const newPermission = await Permission.create({ name, description });
    res.status(201).json(newPermission);
  } catch (error) {
    res.status(500).json({ error: 'Error creating permission' });
  }
};

export const getPermissions = async (req: Request, res: Response) => {
  try {
    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching permissions' });
  }
};
