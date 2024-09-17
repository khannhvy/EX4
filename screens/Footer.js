import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';  
import { useTheme } from './ThemeContext'; 

const Footer = () => {
  const [selectedTab, setSelectedTab] = useState('Category');  
  const navigation = useNavigation();  
  const { isDarkMode } = useTheme();

  const handlePress = (tab) => {
    setSelectedTab(tab);
    navigation.navigate(tab); 
  };

  return (
    <View style={[styles.footer, isDarkMode ? styles.darkFooter : styles.lightFooter]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Categoryy')}
      >
        <Icon 
          name="list" 
          size={24} 
          color={selectedTab === 'Categoryy' ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#888' : '#888')}  
        />
        <Text style={[styles.buttonText, { color: selectedTab === 'Categoryy' ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#888' : '#888') }]}>
          Danh mục
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Favoritee')}
      >
        <Icon 
          name="heart" 
          size={24} 
          color={selectedTab === 'Favoritee' ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#888' : '#888')} 
        />
        <Text style={[styles.buttonText, { color: selectedTab === 'Favoritee' ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#888' : '#888') }]}>
          Yêu thích
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Settingg')} 
      >
        <Icon 
          name="cogs" 
          size={24} 
          color={selectedTab === 'Settingg' ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#888' : '#888')} 
        />
        <Text style={[styles.buttonText, { color: selectedTab === 'Settingg' ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#888' : '#888') }]}>
          Cài đặt
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingHorizontal: 10,
  },
  lightFooter: {
    backgroundColor: '#f8f8f8',
  },
  darkFooter: {
    backgroundColor: '#333333',
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Footer;
