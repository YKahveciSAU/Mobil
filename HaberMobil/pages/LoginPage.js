import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SingIn from '../src/components/Login/SingIn'
import SingUp from '../src/components/Login/SingUp'
const Tab = createBottomTabNavigator();

function Login() {
    return (
        <Tab.Navigator tabBarOptions={{labelStyle:{fontSize:20,marginBottom:10}}}>
            <Tab.Screen  name="Giris Yap" component={SingIn} />
            <Tab.Screen name="Kayit Ol" component={SingUp} />
        </Tab.Navigator>
    )
}

export default Login
