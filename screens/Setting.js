import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 
const Setting = () => {
  const { isDarkMode, toggleTheme } = useTheme(); 

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
        <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
          Ngôn ngữ
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]} onPress={toggleTheme}>
        <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
          {isDarkMode ? 'Chế độ Sáng' : 'Chế độ Tối'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  option: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  lightOption: {
    backgroundColor: '#ffffff',
  },
  darkOption: {
    backgroundColor: '#555555',
  },
  optionText: {
    fontSize: 18,
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});

export default Setting;
