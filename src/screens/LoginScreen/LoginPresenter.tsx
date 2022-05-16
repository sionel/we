import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Presenter } from './types';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPresenter: React.FC<Presenter> = ({ onPressNextStep }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#f00',
            padding: 10,
          }}
          onPress={onPressNextStep}>
          <Text>LoginPresenter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPresenter;
