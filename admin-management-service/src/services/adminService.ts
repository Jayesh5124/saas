import Admin, { IAdmin } from '../models/Admin';

export const getAllUsers = async (): Promise<IAdmin[]> => {
  return Admin.find();
};

export const createUser = async (userData: Partial<IAdmin>): Promise<IAdmin> => {
  const user = new Admin(userData);
  await user.save();
  return user;
};

// Additional service functions can be added here
