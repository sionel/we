import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Presenter } from './types';
// import { SafeAreaView } from 'react-native-safe-area-context';

const SplashPresenter: React.FC<Presenter> = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(255,255,0,0.5)' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>스플래쉬 페이지 3초뒤에 넘어갑니다</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashPresenter;
