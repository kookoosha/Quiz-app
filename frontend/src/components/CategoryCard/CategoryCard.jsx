import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import styles from '../../screens/TextBookScreen/textBookScreen';
import themeContext from '../../ThemeContext/themeContext';

export default function CategoryCard() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  useEffect(() => {
    axios('https://638dd689aefc455fb2ad5d2b.mockapi.io/categories')
      .then((res) => setCategories(res.data))
      .catch(console.log);
  }, []);

  return (
    <ScrollView style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.container}>
        {categories?.map((el) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ThemeList', { param: el.id })} // ${el.id}
          >
            <View style={styles.cardContainer}>
              <Text style={styles.titleStyle}>{el.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

  );
}
