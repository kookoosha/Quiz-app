import { Button, ListItem } from '@react-native-material/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Linking, ScrollView } from 'react-native';
import styles from '../../screens/TextBookScreen/textBookScreen';
import themeContext from '../../ThemeContext/themeContext';

export default function ThemeList({ route }) {
  console.log(route.params.param);
  const [subCategory, setSubcategory] = useState([]);
  const theme = useContext(themeContext);

  useEffect(() => {
    axios(`https://638f16129cbdb0dbe31c9fea.mockapi.io/subcategory${route.params.param}`)
      .then((res) => setSubcategory(res.data))
      .catch(console.log);
  }, []);

  return (
    <ScrollView style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      {subCategory?.map((el) => (
        <Button
          style={{ marginTop: 22 }}
          title={el.name}
          onPress={() => Linking.openURL(`${el.url}`)}
        />
      ))}
    </ScrollView>
  );
}
