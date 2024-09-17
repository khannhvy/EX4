import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 
const images = {
  '1': require('../assets/1/1.jpg'),
  '2': require('../assets/2/1.jpg'),
  '3': require('../assets/3/1.jpg'),
  '4': require('../assets/4/1.jpg'),
};

const categories = [
  { id: '1', name: 'Món khai vị', image: '1' },
  { id: '2', name: 'Món chính', image: '2' },
  { id: '3', name: 'Món tráng miệng', image: '3' },
  { id: '4', name: 'Đồ uống', image: '4' },
];

const Category = ({ navigation }) => {
  const { isDarkMode } = useTheme(); 

  const handlePress = (categoryId) => {
    switch (categoryId) {
      case '1':
        navigation.navigate('Appetizer');
        break;
      case '2':
        navigation.navigate('MainCourse');
        break;
      case '3':
        navigation.navigate('Dessert');
        break;
      case '4':
        navigation.navigate('Drinks');
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.item, isDarkMode ? styles.darkItem : styles.lightItem]} onPress={() => handlePress(item.id)}>
      <Image source={images[item.image]} style={styles.image} />
      <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  item: {
    flex: 1,
    margin: 12, 
    borderRadius: 12,  
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  lightItem: {
    backgroundColor: '#f9f9f9',
  },
  darkItem: {
    backgroundColor: '#555555',
  },
  image: {
    width: '100%',
    height: 140, 
    borderRadius: 12,
    marginBottom: 8,  
  },
  title: {
    fontSize: 18,  
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#ffffff',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default Category;
