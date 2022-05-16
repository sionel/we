import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/user';
import { User } from '../../types';
import CretPresenter from './CretPresenter';
import { Container } from './types';

const CretContainer: React.FC<Container> = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const login = (userInfo: User) => dispatch(userActions.setUser(userInfo));
  const handlePressLogin = () => {
    login({
      id: 'sadb0101',
      name,
      nickname: 'sionel',
      phone: '010-2298-9617',
    });
  };
  const handleChangeName = (inputName: string) => {
    debugger;
    setName(inputName);
  };
  return (
    <CretPresenter
      onPressLogin={handlePressLogin}
      name={name}
      onChangeName={handleChangeName}
    />
  );
};

export default CretContainer;
