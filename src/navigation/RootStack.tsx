import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/types';
import LoginStack from './LoginStack';
import MainStack from './MainStack';

const HomeStack = () => {
  const { isLogin } = useSelector((state: RootState) => {
    return {
      isLogin: state.user.isLogin,
    };
  });

  return (
    <NavigationContainer>
      {!isLogin ? <LoginStack /> : <MainStack />}
    </NavigationContainer>
  );
};
export default HomeStack;
