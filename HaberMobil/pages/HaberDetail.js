import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Haberler from '../src/components/Haberler';
import Web from '../src/components/Web'
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
export default function HaberDetail() {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Haberler" component={Haberler} options={{headerShown: false}}/>
        <Stack.Screen name="Web" component={Web} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}