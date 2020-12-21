import React,{useState} from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Haberler from '../src/components/Haber/Haberler';
import Web from '../src/components/Tarayici/Web'
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'

import firebase from 'firebase'


const Stack = createStackNavigator();

export default function HaberDetail({navigation}) {
  const [userLog,setUserLog]=useState(false)
  firebase.auth().onAuthStateChanged(user => {
    user
      ? setUserLog(true)
      : setUserLog(false)
  });
  if(userLog){
      return (
        <Stack.Navigator >
          <Stack.Screen name="Haberler" component={Haberler} options={{headerShown: false}}/>
          <Stack.Screen name="Web" component={Web} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
  }
  else {
    return(
      <TouchableWithoutFeedback onPress={()=>navigation.navigate("Kullanici Girisi")}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Icon  name={"sign-in-alt"} size={100}/>
          <Text>HABERLERI GORMEK ICIN GIRIS YAPINIZ</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}