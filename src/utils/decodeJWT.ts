import * as jwt from 'jsonwebtoken';
import { Token } from '@src/types/types';
import User from '../entities/User';

const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN as string) as Token;
    const user = await User.findOne({ id: decoded.id });
    return user;
  } catch (error) {
    console.log({ error });
    return undefined;
  }
};

export default decodeJWT;
