import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFavorites } from './FavoriteContext'; 
import { useTheme } from './ThemeContext'; 
import { useNavigation } from '@react-navigation/native'; 

const images = {
  '1': require('../assets/1/2.jpg'),
  '2': require('../assets/1/3.jpg'),
  '3': require('../assets/1/4.jpg'),
  '4': require('../assets/1/5.jpg'),
  '5': require('../assets/2/2.jpg'),
  '6': require('../assets/2/3.jpg'),
  '7': require('../assets/2/4.jpg'),
  '8': require('../assets/2/1.jpg'),
  '9': require('../assets/3/2.jpg'),
  '10': require('../assets/3/3.jpg'),
  '11': require('../assets/3/4.jpg'),
  '12': require('../assets/3/5.jpg'),
  '13': require('../assets/4/2.jpg'),
  '14': require('../assets/4/3.jpg'),
  '15': require('../assets/4/4.jpg'),
  '16': require('../assets/4/5.jpg'),
};

const Favorite = () => {
  const { favorites } = useFavorites();
  const { isDarkMode } = useTheme();
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('FoodDetail', { food: item });
  };

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => handlePress(item)} 
      style={[styles.item, isDarkMode ? styles.darkItem : styles.lightItem]}
    >
      <Image source={images[item.image]} style={styles.image} />
      <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* <Text style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>Món yêu thích</Text> */}
      <FlatList
        data={favorites}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id.toString()}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  lightItem: {
    backgroundColor: '#f9f9f9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  darkItem: {
    backgroundColor: '#555555',
  },
  image: {
    width: 50, 
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  title: {
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

export default Favorite;
