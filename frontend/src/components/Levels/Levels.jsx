import React from 'react';
// import { Button, ListItem } from '@react-native-material/core';
import axios from 'axios';
import { FlatList, View } from 'react-native';
import { OneLevel } from './OneLevel';

function Levels() {
  const [levels, setLevels] = React.useState();
  const fetchLevels = () => {
    axios('https://rickandmortyapi.com/api/character')
      .then((res) => setLevels(res.data.results))
      .catch(console.log);
  };

  React.useEffect(fetchLevels, [levels]);

  return (
    <View>
      <FlatList
        data={levels}
        renderItem={(level) => (
          <OneLevel title={level.item.title} />
        )}
      />
    </View>
  );

  // return (
  //   <ListItem leading={<Button title="Button" />} />
  // );
}

export default Levels;
