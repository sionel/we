import React from 'react';
import LoginPresenter from './LoginPresenter';
import { Container } from './types';

const LoginContainer: React.FC<Container> = ({ navigation }) => {
  const handlePressNextStep = () => {
    navigation.navigate('Cert', {});
  };
  return <LoginPresenter onPressNextStep={handlePressNextStep} />;
};

export default LoginContainer;
