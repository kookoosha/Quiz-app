import React from 'react';
// import axios from 'axios';
import { View } from 'react-native';
import { OneLevel } from './OneLevel';

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
    <View style={{ margin: 30, flexDirection: 'column' }}>
      <OneLevel />
    </View>
  );
}

export default Levels;
