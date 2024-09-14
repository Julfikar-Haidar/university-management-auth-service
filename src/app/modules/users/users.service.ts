import config from '../../../config';
import { IUser } from './users.interface';
import { User } from './users.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  console.log('7', user);
  // auto generate increment
  // const id = await generateUserId();

  // user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }
  const createdUser = await User.create(user);

  if (!createUser) {
    throw new Error('Failed to create user!');
  }

  return createdUser;
};

export default {
  createUser,
};
