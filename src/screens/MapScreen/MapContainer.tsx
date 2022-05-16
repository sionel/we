import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/types';
import {userActions} from '../../redux/user';
import MapPresenter from './MapPresenter';
import {Container} from './types';

const MapContainer: React.FC<Container> = () => {
  const dispatch = useDispatch();
  const {name} = useSelector((state: RootState) => ({
    name: state.user.name,
  }));
  const logout = () => dispatch(userActions.resetUser());
  const handlePressLogout = () => {
    logout();
  };
  return <MapPresenter onPressLogout={handlePressLogout} name={name} />;
};

export default MapContainer;
