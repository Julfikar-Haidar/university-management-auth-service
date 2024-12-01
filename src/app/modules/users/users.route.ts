import express from 'express';
import { UserController } from './users.controller';

const router = express.Router();

router.post(
  '/create',

  UserController.createUsers
);

export const UserRoutes = router;
