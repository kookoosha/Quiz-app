import React from 'react';
import { Button } from '@react-native-material/core';
import { View } from 'react-native';

export function OneLevel({ id, level }) {
  return (
    <View>
      <Button style={{ marginBottom: 10 }} title={level} />
      {/* <Button style={{ marginBottom: 10 }} title="Middle" />
      <Button style={{ marginBottom: 10 }} title="Senior" /> */}
    </View>
  );
}

// export default OneLevel;
