import React,{useState} from 'react';
import {View,TextInput,Dimensions, Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Height=Dimensions.get("window").height;
const Width=Dimensions.get("window").width;
function SingIn() {
    const [userName,setUserName]=useState("")
    const [userPassword,setUserPassword]=useState("")
    return (
        <View style={{display:"flex",alignItems:"center",backgroundColor:"#fff",height:Height}}>
            
            <Text style={{fontSize:30}}>
                KULLANICI GIRISI
            </Text>
            <View>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center",margin:3,padding:10,borderWidth:1,paddingLeft:15,paddingRight:10,backgroundColor:"#eee",borderColor:"#eee",borderRadius:10}}>
                    <Icon name={"user"} size={30}/>
                    <TextInput
                        placeholder="Kullanici Adi"
                        onChangeText={(name) => setUserName(name)}
                        style={{marginLeft:10,width:Width/2,fontSize:18}}
                    />
                </View>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center",margin:3,padding:10,borderWidth:1,paddingLeft:15,paddingRight:10,backgroundColor:"#eee",borderColor:"#eee",borderRadius:10}}>
                    <Icon name={"lock"} size={30}/>
                    <TextInput
                        placeholder="Sifre"
                        secureTextEntry={true}
                        onChangeText={(password) => setUserPassword(password)}
                        style={{marginLeft:10,width:Width/2,fontSize:18}}
                    />
                </View>
            </View>
            <TouchableOpacity>
                <Text style={{backgroundColor:"#57b847",padding:10,width:Width/2,borderRadius:10,color:"#fff",fontSize:18,textAlign:"center"}}>
                    Giris Yap
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SingIn
