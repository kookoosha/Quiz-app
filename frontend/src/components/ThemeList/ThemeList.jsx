import { ListItem } from '@react-native-material/core';
import React from 'react';

export default function ThemeList({ route }) {
  console.log(route.params.param);
  return (
    <>
      <ListItem title="List Item" />
      <ListItem title="List Item" />
      <ListItem title="List Item" />
    </>
  );
}
