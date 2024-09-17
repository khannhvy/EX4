import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FavoriteProvider } from './screens/FavoriteContext'; 
import Favorite from './screens/Favorite';
import Setting from './screens/Setting';
import Category from './screens/Category';
import Footer from './screens/Footer';
import Appetizer from './screens/Appetizer';
import MainCourse from './screens/MainCourse';
import Dessert from './screens/Dessert';
import Drinks from './screens/Drinks';
import FoodDetail from './screens/FoodDetail';
import { ThemeProvider, useTheme } from './screens/ThemeContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CategoryStack = () => {
  const { isDarkMode } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#333' : '#fff',
        },
        headerTintColor: isDarkMode ? '#fff' : '#000',
      }}
    >
      <Stack.Screen name="Category" component={Category} options={{ title: 'Meals' }} />
      <Stack.Screen name="Appetizer" component={Appetizer} options={{ title: 'Món khai vị' }} />
      <Stack.Screen name="MainCourse" component={MainCourse} options={{ title: 'Món chính' }} />
      <Stack.Screen name="Dessert" component={Dessert} options={{ title: 'Món tráng miệng' }} />
      <Stack.Screen name="Drinks" component={Drinks} options={{ title: 'Đồ uống' }} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ title: 'Chi tiết món ăn' }} />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  const { isDarkMode } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#333' : '#fff',
        },
        headerTintColor: isDarkMode ? '#fff' : '#000',
      }}
    >
      <Stack.Screen name="Favorite" component={Favorite} options={{ title: '' }} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  const { isDarkMode } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#333' : '#fff',
        },
        headerTintColor: isDarkMode ? '#fff' : '#000',
      }}
    >
      <Stack.Screen name="Setting" component={Setting} options={{ title: '' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <Drawer.Navigator
              initialRouteName="Category"
              screenOptions={({ route }) => {
                const { isDarkMode } = useTheme();
                return {
                  drawerStyle: {
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                  },
                  headerStyle: {
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                  },
                  headerTintColor: isDarkMode ? '#fff' : '#000',
                };
              }}
            >
             <Drawer.Screen name="Categoryy" component={CategoryStack} options={{ title: 'Danh mục' }} />
              <Drawer.Screen name="Favoritee" component={FavoriteStack} options={{ title: 'Món ăn yêu thích' }} />
              <Drawer.Screen name="Settingg" component={SettingStack} options={{ title: 'Cài đặt' }}  />
            </Drawer.Navigator>
            <Footer />
          </View>
        </NavigationContainer>
      </FavoriteProvider>
    </ThemeProvider>
  );
};

export default App;
