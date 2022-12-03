import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { OneLevel } from './OneLevel';

function Levels() {
  const levels = useSelector((store) => store.levels);
  // const [levels, setLevels] = React.useState();

  // React.useEffect(() => {
  //   axios.get()
  //     .then((res) => setLevels(res.data))
  //     .catch((error) => console.log(error));
  // }, [levels]);

  //   axios.request(options)
  //     .then((response) => {
  //       setLevels(response.data.stories);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [levels]);
  // React.useEffect(fetchLevels, [levels]);
  const navigation = useNavigation();

  return (
    <View style={{ margin: 30, flexDirection: 'column' }}>
      {levels?.map((el) => (
        <OneLevel
          key={el.id}
          id={el.id}
          level={el}
        />
      ))}
      <Button style={{ marginBottom: 10, backgroundColor: 'gray' }} title="jun+" onPress={() => navigation.navigate('Que')} />

    </View>
  );
}

export default Levels;
