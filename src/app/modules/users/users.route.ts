import express from 'express';
import usersController from './users.controller';

const router = express.Router();

router.post(
  '/create',

  usersController.createUserrr
);

export default router;
