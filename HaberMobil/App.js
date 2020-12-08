import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HaberDetail from './pages/HaberDetail';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer >
        <Drawer.Navigator >
          <Drawer.Screen name="HaberDetail" component={HaberDetail}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}