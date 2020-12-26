import React,{useState,useEffect} from 'react';
import {View,Text,Dimensions,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'firebase'

import {styles} from './css/SingCss'

const Height=Dimensions.get("window").height;
const Width=Dimensions.get("window").width;
function SingUp({navigation}) {
    const [userName,setUserName]=useState("")
    const [userPassword,setUserPassword]=useState("")
    const [comfirmPassword,setComfirmPassword]=useState("")
    const [nameField,setNameField]=useState(true);
    const [passField,setPassField]=useState(true)
    const [backColor,setBackColor]=useState("#eee")

    
    function Gonder(){
        userName === "" ? setNameField(false) : setNameField(true) ;
        userPassword === "" ? setPassField(false) : setPassField(true);

        if (nameField&&passField&&comfirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(userName,userPassword)
            .then(()=>{
                console.log(userName+" olusturuldu")
                firebase.auth().signOut();
                navigation.navigate("Giris Yap");
            })
            .catch(()=>{
                console.log(userName+" olusturulamadi.");
                console.log(userPassword);
                console.log(comfirmPassword)
            })
        }
    }

    useEffect(()=>{
        comfirmPassword===userPassword ? setBackColor("#eee") : setBackColor("#f00");
    },[comfirmPassword])

    return (
            <View style={styles.conteiner}>
                <View>
                    <View style={styles.icon}>
                        <Icon name={"users"} size={80}/>
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
                    <View style={[styles.input,{borderColor:backColor}]}>
                        <Icon name={"unlock"} size={30}/>
                        <TextInput
                            placeholder="Sifre Dogrula"
                            secureTextEntry={true}
                            onChangeText={(pass) => setComfirmPassword(pass)}
                            style={{marginLeft:10,width:Width/2,fontSize:18,paddingLeft:5}}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={()=> Gonder()}>
                    <Text style={styles.login}>
                        Kayit Ol
                    </Text>
                </TouchableOpacity>
            </View>
    )
}

export default SingUp
