import React,{useState} from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SingIn from '../src/components/Login/SingIn'
import SingUp from '../src/components/Login/SingUp'
import Icon from 'react-native-vector-icons/FontAwesome5'

import firebase from 'firebase'

const Tab = createBottomTabNavigator();

function Login() {
    const [userLog,setUserLog]=useState(false)
    firebase.auth().onAuthStateChanged(user => {
      user 
        ? setUserLog(true)
        : setUserLog(false)
    });
    if(userLog){
        return(
        <TouchableWithoutFeedback onPress={()=>firebase.auth().signOut()}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <Icon  name={"sign-out-alt"} size={100}/>
              <Text>CIKIS YAPIN</Text>
            </View>
          </TouchableWithoutFeedback>
        )
    }
    else{
        return (
            <Tab.Navigator tabBarOptions={{labelStyle:{fontSize:20,marginBottom:10}}}>
                <Tab.Screen  name="Giris Yap" component={SingIn} />
                <Tab.Screen name="Kayit Ol" component={SingUp} />
            </Tab.Navigator>
        )
    }
}

export default Login
