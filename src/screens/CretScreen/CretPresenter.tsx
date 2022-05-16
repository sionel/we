import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import React from 'react';
import { Presenter } from './types';
import { SafeAreaView } from 'react-native-safe-area-context';

const CertPresenter: React.FC<Presenter> = ({
  onPressLogin,
  onChangeName,
  name,
}) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'번호 인증 페이지'}</Text>
      <TextInput
        style={{
          padding: 10,
          backgroundColor: '#ff8',
          borderWidth: 1,
          borderColor: '#000',
          margin: 10,
          width: 100,
        }}
        value={name}
        onChangeText={onChangeName}
        onSubmitEditing={onPressLogin}
        placeholder={'이름입력'}
      />
      <TouchableOpacity
        style={{ borderColor: '#000', borderWidth: 1, width: 50, height: 50 }}>
        <Text>{'입력'}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default CertPresenter;
