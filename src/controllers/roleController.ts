import { Request, Response } from 'express';
import Role from '../models/Role';

export const createRole = async (req: Request, res: Response) => {
  const { name, permissions } = req.body;

  try {
    const newRole = await Role.create({ name, permissions });
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: 'Error creating role' });
  }
};

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await Role.find().populate('permissions');
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching roles' });
  }
};
