import { Request, Response } from 'express';
import EntityNotFoundError from '../../../errors/EntityNotFoundError';

export const listTasks = (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const getTask = (req: Request, res: Response) => {
  throw new EntityNotFoundError('Task not found', 404, 'ERR_NF');
  res.status(200).json({ id: 1, name: 'Task 1' });
};
