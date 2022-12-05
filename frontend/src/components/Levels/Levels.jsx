import { Button } from '@react-native-material/core';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from '../../screens/MainScreen/mainScreen';
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

    // <View style={styles.levelsBtns}>
    //   <Button style={{ marginBottom: 30 }} title="Junior" />
    //   <Button style={{ marginBottom: 30 }} title="Middle" />
    //   <Button style={{ marginBottom: 30 }} title="Senior" />
    //   </View>
    <>
      {levels?.map((el) => (
        <OneLevel
          key={el.id}
          id={el.id}
          level={el}
        />
      ))}
      <Button style={{ marginBottom: 30, width: 200 }} title="Junior" onPress={() => navigation.navigate('Que')} />
    </>

  );
}

export default Levels;
