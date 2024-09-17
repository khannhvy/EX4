import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useTheme } from './ThemeContext'; 

const images = {
  '5': require('../assets/2/2.jpg'),
  '6': require('../assets/2/3.jpg'),
  '7': require('../assets/2/4.jpg'),
  '8': require('../assets/2/1.jpg'),
};

const mainCourses = [
  { id: '1', name: 'Bò bít tết', image: '5' },
  { id: '2', name: 'Cơm tấm', image: '6' },
  { id: '3', name: 'Mì xào', image: '7' },
  { id: '4', name: 'Phở', image: '8' },
];

const MainCourse = ({ navigation }) => {
  const { isDarkMode } = useTheme(); 
  const handlePress = (item) => {
    navigation.navigate('FoodDetail', { food: item }); 
  };

  const renderMainCourseItem = ({ item }) => (
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
      {/* <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>Món chính</Text> */}
      <FlatList
        data={mainCourses}
        renderItem={renderMainCourseItem}
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

export default MainCourse;
