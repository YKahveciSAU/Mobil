import React,{useState} from 'react';
import {View,TextInput,Dimensions, Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import firebase from 'firebase'
import { registerForPushNotifications} from '../../../utils/RegisterNotifications'

import {styles} from './css/SingCss'

const Height=Dimensions.get("window").height;
const Width=Dimensions.get("window").width;
function SingIn({navigation}) {
    const [userName,setUserName]=useState("")
    const [userPassword,setUserPassword]=useState("")
    const [nameField,setNameField]=useState(true);
    const [passField,setPassField]=useState(true)


    function Gonder(){
        userName === "" ? setNameField(false) : setNameField(true) ;
        userPassword === "" ? setPassField(false) : setPassField(true);

        firebase.auth().signInWithEmailAndPassword(userName,userPassword)
        .then(()=>{
            registerForPushNotifications();
            navigation.navigate("Haberler")
        })
        .catch(()=>console.log("error"));
    }
    return (
            <View style={styles.conteiner}>
                <View>
                    <View style={styles.icon}>
                        <Icon name={"user"} size={80}/>
                    </View>
                    <View style={[styles.input,nameField ? {borderColor:"#eee"}: {borderColor:"#f00"}]}>
                        <Icon name={"envelope"} size={24}/>
                        <TextInput
                            placeholder="Kullanici Adi"
                            onChangeText={(name) => setUserName(name)}
                            style={{marginLeft:10,width:Width/2,fontSize:18,paddingLeft:5}}
                        />
                    </View>
                    <View style={[styles.input,passField ? {borderColor:"#eee"}: {borderColor:"#f00"}]}>
                        <Icon name={"lock"} size={30}/>
                        <TextInput
                            placeholder="Sifre"
                            secureTextEntry={true}
                            onChangeText={(password) => setUserPassword(password)}
                            style={{marginLeft:10,width:Width/2,fontSize:18,paddingLeft:5}}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={()=> Gonder()}>
                    <Text style={styles.login}>
                        Giris Yap
                    </Text>
                </TouchableOpacity>
                <Text style={styles.forget}>
                    Kullanici Adi/Sifre Unuttum
                </Text>
            </View>
    )
}



export default SingIn