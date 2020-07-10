import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Public from './src/routes';

export default function App() {
 return (
   <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      <Public/>
   </NavigationContainer> 
  );
}
