import React from 'react';
import { Button } from '@react-native-material/core';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function OneLevel() {
  const navigation = useNavigation();
  return (
    <View>
      <Button style={{ marginBottom: 10 }} title="Junior" />
      <Button style={{ marginBottom: 10 }} title="Middle" />
      <Button style={{ marginBottom: 10 }} title="Senior" />
      <Button style={{ marginBottom: 10, backgroundColor: 'gray' }} title="jun+" onPress={() => navigation.navigate('Que')} />
    </View>
  );
}

// export default OneLevel;
