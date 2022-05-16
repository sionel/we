import { View, Text } from 'react-native';
import React from 'react';
import { Presenter } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import { friends } from './mock';

const FriendPresenter: React.FC<Presenter> = ({}) => {
  // const {} = useSelector((state: RootState) => {
  //   return {

  //   }
  // });

  return (
    <View style={{ flex: 1 }}>
      {friends.map((friend, index) => {
        // return <FriendCard friend={friend} />;
      })}
    </View>
  );
};

export default FriendPresenter;
