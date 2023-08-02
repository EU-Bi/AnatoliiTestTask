/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CatalogScreen from './src/screens/CatalogScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BasketScreen from './src/screens/BasketScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();

const screenOptions = {
  topBarShowLabel: false,
  headerShown: false,
  topBarHideOnKeyboard: true,
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="CatalogStack" component={CatalogScreen} />
          <Tab.Screen name="BasketStack" component={BasketScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
