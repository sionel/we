import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MapScreen from '../screens/MapScreen';
import FriendScreen from '../screens/FriendScreen';
import {MainStack} from './types';
// import Icon from '../components/Icon';

export default () => {
  const Tab = createBottomTabNavigator<MainStack>();
  const getIconName = (routeName: keyof MainStack) => {
    switch (routeName) {
      case 'Chat':
        return 'icoChatting';
      case 'List':
        return 'icoNotification';
      case 'Friend':
        return 'icoImportantFriend';
      case 'Map':
        return 'icoMap';
    }
  };
  return (
    <Tab.Navigator
    // screenOptions={({route}) => {
    //   return {
    //     tabBarIcon: ({size}) => {
    //       const name = getIconName(route.name);
    //       return <Icon name={name} size={size} />;
    //     },
    //   };
    // }}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Friend" component={FriendScreen} />
      <Tab.Screen name="List" component={FriendScreen} />
      <Tab.Screen name="Chat" component={FriendScreen} />
      <Tab.Screen name="test" component={FriendScreen} />
    </Tab.Navigator>
  );
};
