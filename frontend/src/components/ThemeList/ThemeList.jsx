import { ListItem } from '@react-native-material/core';
// import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Linking, ScrollView } from 'react-native';

export default function ThemeList({ route }) {
  console.log(route.params.param);
  const [subCategory, setSubcategory] = useState([]);
  //   const navigation = useNavigation();

  useEffect(() => {
    axios(`https://638f16129cbdb0dbe31c9fea.mockapi.io/subcategory${route.params.param}`)
      .then((res) => setSubcategory(res.data))
      .catch(console.log);
  }, []);

  return (
    <ScrollView>
      {subCategory?.map((el) => (
        <ListItem onPress={() => { Linking.openURL(`${el.url}`); }} title={el.name} />
      ))}
    </ScrollView>
  );
}
