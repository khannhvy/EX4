import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useFavorites } from './FavoriteContext';
import { useTheme } from './ThemeContext'; 

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

const FoodDetail = ({ route, navigation }) => {
  const { food } = route.params;
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { isDarkMode } = useTheme();
  const [isFavorite, setIsFavorite] = useState(favorites.some(item => item.id === food.id));

  const handleFavoritePress = () => {
    if (isFavorite) {
      removeFavorite(food.id);
    } else {
      addFavorite(food);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity> */}
      <Image source={images[food.image]} style={styles.image} />
      <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteIcon}>
        <Icon name={isFavorite ? "favorite" : "favorite-border"} size={40} color={isFavorite ? "red" : (isDarkMode ? '#fff' : '#000')} />
      </TouchableOpacity>
      <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>{food.name}</Text>
      <Text style={[styles.description, isDarkMode ? styles.darkText : styles.lightText]}>
        Mô tả chi tiết về món ăn sẽ được hiển thị ở đây.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50, 
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 30,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default FoodDetail;
