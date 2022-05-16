import { User } from '../../types';
import { USER_SET, USER_RESET } from './actionTypes';

const setUser = (userInfo: User) => {
  return {
    type: USER_SET,
    payload: userInfo,
  };
};
const resetUser = () => {
  return {
    type: USER_RESET,
  };
};

const actions = {
  setUser,
  resetUser,
};
export default actions;
