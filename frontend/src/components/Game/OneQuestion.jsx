import { Button, ListItem } from '@react-native-material/core';
import React from 'react';
import { Text, View } from 'react-native';

export default function OneQuestion({ question }) {
  return (
    <View>
      <ListItem title="List Item" />
      <Button variant="outlined" title="Next" color="#d4ac2d" />
    </View>
  );
}
