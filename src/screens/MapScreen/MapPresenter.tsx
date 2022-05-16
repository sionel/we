import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Presenter } from './types';

const MapPresenter: React.FC<Presenter> = ({ onPressLogout, name }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MapPresenter</Text>
      <TouchableOpacity
        onPress={onPressLogout}
        style={{ padding: 10, backgroundColor: '#06f' }}>
        <Text>{`${name}님 로그아웃`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapPresenter;
