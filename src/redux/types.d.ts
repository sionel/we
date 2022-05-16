import { User } from '../types';

// import User from '../';
export interface UserState extends User {
  isLogin: boolean;
}

export type RootState = {
  user: UserState;
};
