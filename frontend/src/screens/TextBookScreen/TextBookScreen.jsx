import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
// import { SelectList } from 'react-native-dropdown-select-list';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import themeContext from '../../ThemeContext/themeContext';
import styles from '../MainScreen/mainScreen';

export default function TextBookScreen() {
  // const theme = useContext(themeContext);
  // const [selected, setSelected] = useState('');
  // const data = [
  //   { key: '1', value: 'Основы JavaScript' },
  //   { key: '2', value: 'Типы данных' },
  //   { key: '3', value: 'Преобразование типов' },
  //   { key: '4', value: 'Операторы сравнения' },
  //   { key: '5', value: 'Циклы while и for' },
  //   { key: '6', value: 'Function Expression' },
  //   { key: '7', value: 'Стрелочные функции, основы' },
  // ];
  return (
    <CategoryCard />
    // <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
    //   <SelectList
    //     style={[styles.btnText, { color: theme.color }]}
    //     // style={styles.selectList}
    //     setSelected={(val) => setSelected(val)}
    //     data={data}
    //     save="value"
    //   />

  // </View>
  );
}
