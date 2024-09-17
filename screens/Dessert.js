import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useTheme } from './ThemeContext'; 

const images = {
  '9': require('../assets/3/2.jpg'),
  '10': require('../assets/3/3.jpg'),
  '11': require('../assets/3/4.jpg'),
  '12': require('../assets/3/5.jpg'),
};

const desserts = [
  { id: '1', name: 'Bánh flan', image: '9' },
  { id: '2', name: 'Kem', image: '10' },
  { id: '3', name: 'Chè', image: '11' },
  { id: '4', name: 'Tiramisu', image: '12' },
];

const Dessert = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  const handlePress = (item) => {
    navigation.navigate('FoodDetail', { food: item }); 
  };

  const renderDessertItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => handlePress(item)} 
      style={[styles.itemContainer, isDarkMode ? styles.darkItemContainer : styles.lightItemContainer]}
    >
      <Image source={images[item.image]} style={styles.itemImage} />
      <Text style={[styles.itemText, isDarkMode ? styles.darkText : styles.lightText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity> */}
      {/* <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>Món tráng miệng</Text> */}
      <FlatList
        data={desserts}
        renderItem={renderDessertItem}
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
  backButton: {
    marginBottom: 10,
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
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
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

export default Dessert;
