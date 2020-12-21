import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HaberDetail from './pages/HaberDetail';
import Login from './pages/LoginPage';
import 'react-native-gesture-handler';

import { firebaseConfig } from './config'
import * as firebase from 'firebase'

firebase.initializeApp(firebaseConfig);

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer >
        <Drawer.Navigator >
          <Drawer.Screen name="Kullanici Girisi" component={Login}/>
          <Drawer.Screen name="Haberler" component={HaberDetail}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}