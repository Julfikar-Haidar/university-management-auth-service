import { Request, Response } from 'express';
import usersService from './users.service';

const createUsers = async (req: Request, res: Response) => {
  try {
    console.log('Inside createUser controller');

    const { user } = req.body;
    console.log('Received user data:', user);

    const result = await usersService.createUser(user);
    console.log('Result from service:', result);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error in createUser controller:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    });
  }
};

export default {
  createUsers,
};
