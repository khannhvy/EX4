import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const images = {
  '1': require('../assets/1/2.jpg'),
  '2': require('../assets/1/3.jpg'),
  '3': require('../assets/1/4.jpg'),
  '4': require('../assets/1/5.jpg'),
};

const appetizers = [
  { id: '1', name: 'Chả giò', image: '1' },
  { id: '2', name: 'Gỏi cuốn', image: '2' },
  { id: '3', name: 'Súp hải sản', image: '3' },
  { id: '4', name: 'Bánh bao', image: '4' },
];

const Appetizer = ({ navigation }) => {
  const { isDarkMode } = useTheme(); 

  const handlePress = (item) => {
    navigation.navigate('FoodDetail', { food: item }); 
  };

  const renderAppetizerItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={[
        styles.itemContainer,
        isDarkMode ? styles.darkItemContainer : styles.lightItemContainer
      ]}
    >
      <Image source={images[item.image]} style={styles.itemImage} />
      <Text style={[styles.itemText, isDarkMode ? styles.darkText : styles.lightText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <FlatList
        data={appetizers}
        renderItem={renderAppetizerItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
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
  flatListContent: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  lightItemContainer: {
    backgroundColor: '#f9f9f9', 
  },
  darkItemContainer: {
    backgroundColor: '#555555', 
  },
  itemImage: {
    width: Dimensions.get('window').width / 2 - 40,
    height: 120,
    borderRadius: 10,
    margin: 10, 
  },
  itemText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#333', 
  },
  darkText: {
    color: '#ffffff', 
  },
});

export default Appetizer;
