import React from 'react';
import { Button } from '@react-native-material/core';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function OneLevel({ id, level }) {
  const navigation = useNavigation();
  return (
    <View>
      <Button style={{ marginBottom: 10 }} title={level} />
      <Button style={{ marginBottom: 10, backgroundColor: 'gray' }} title="jun+" onPress={() => navigation.navigate('Que')} />
    </View>
  );
}
