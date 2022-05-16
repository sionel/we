import { useEffect } from 'react';
import { AnyAction } from 'redux';
import { UserState } from '../types';
import { USER_SET, USER_RESET } from './actionTypes';
// import {RootState} from '.';

export const initialState: UserState = {
  isLogin: false,
  id: '',
  name: '',
  nickname: '',
  phone: '',
};

export default (state: UserState = initialState, action: AnyAction) => {
  switch (action.type) {
    case USER_SET:
      return setUser(state, action);
    case USER_RESET:
      return resetUser();
    default:
      return state;
  }
};
useEffect;

const setUser = (state: UserState, action: AnyAction) => {
  const { payload } = action;
  return { ...state, ...payload, isLogin: true };
};
const resetUser = () => {
  return initialState;
};
