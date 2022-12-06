import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {
  ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import styles from '../../screens/TextBookScreen/textBookScreen';

export default function CategoryCard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios('https://638dd689aefc455fb2ad5d2b.mockapi.io/categories')
      .then((res) => setCategories(res.data))
      .catch(console.log);
  }, []);

  return (
    <ScrollView>
      <View style={{
        flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
      }}
      >
        {categories?.map((el) => (
          <TouchableOpacity>
            <View style={styles.cardContainer}>
              <Text style={styles.titleStyle}>{el.title}</Text>
            </View>
          </TouchableOpacity>

        ))}

      </View>
    </ScrollView>

  );
}
