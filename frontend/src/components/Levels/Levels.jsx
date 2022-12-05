import { Button } from '@react-native-material/core';
import React from 'react';

import { View } from 'react-native';
import styles from '../../screens/MainScreen/mainScreen';

function Levels() {
  // const [levels, setLevels] = React.useState();
  // React.useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list',
  //     params: { template: 'CURRENCY', id: 'usdjpy' },
  //     headers: {
  //       'X-RapidAPI-Key': 'bec932e113mshb88dcf77aba1f74p149b5ajsnf9258526c098',
  //       'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com',
  //     },
  //   };

  //   axios.request(options)
  //     .then((response) => {
  //       setLevels(response.data.stories);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [levels]);
  // React.useEffect(fetchLevels, [levels]);

  return (

    <View style={styles.levelsBtns}>
      <Button style={{ marginBottom: 30 }} title="Junior" />
      <Button style={{ marginBottom: 30 }} title="Middle" />
      <Button style={{ marginBottom: 30 }} title="Senior" />
    </View>

  );
}

export default Levels;
