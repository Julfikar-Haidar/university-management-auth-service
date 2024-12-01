import { RequestHandler } from 'express';
import { UserService } from './users.service';

const createUsers: RequestHandler = async (req, res, next) => {
  try {
    console.log('Inside createUser controller');

    const { user } = req.body;
    console.log('Received user data:', user);

    const result = await UserService.createUser(user);
    console.log('Result from service:', result);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUsers,
};
