import React,{useState} from 'react';
import {View,TextInput,Dimensions, Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Height=Dimensions.get("window").height;
const Width=Dimensions.get("window").width;
function SingIn() {
    const [userName,setUserName]=useState("")
    const [userPassword,setUserPassword]=useState("")
    const [nameField,setNameField]=useState(true);
    const [passField,setPassField]=useState(true)

    function Gonder(){
        userName === "" ? setNameField(false) : setNameField(true) ;
        userPassword === "" ? setPassField(false) : setPassField(true);
    }
    return (
            <View style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#fff",height:Height,flex:1}}>
                <View>
                    <View style={{display:"flex",alignItems:"center",marginBottom:30}}>
                        <Icon name={"user"} size={80}/>
                    </View>
                    <View style={[{display:"flex",flexDirection:"row",alignItems:"center",margin:3,marginTop:10,padding:10,borderWidth:1,paddingLeft:15,paddingRight:10,backgroundColor:"#eee",borderColor:"#eee",borderRadius:10},nameField ? {borderColor:"#eee"}: {borderColor:"#f00"}]}>
                        <Icon name={"envelope"} size={24}/>
                        <TextInput
                            placeholder="Kullanici Adi"
                            onChangeText={(name) => setUserName(name)}
                            style={{marginLeft:10,width:Width/2,fontSize:18,paddingLeft:5}}
                        />
                    </View>
                    <View style={[{display:"flex",flexDirection:"row",alignItems:"center",margin:3,marginTop:10,padding:10,borderWidth:1,paddingLeft:15,paddingRight:10,backgroundColor:"#eee",borderColor:"#eee",borderRadius:10},passField ? {borderColor:"#eee"}: {borderColor:"#f00"}]}>
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
                    <Text style={{backgroundColor:"#57b847",margin:3,marginTop:10,padding:10,width:Width/2,borderRadius:10,color:"#fff",fontSize:18,textAlign:"center",fontWeight:"bold"}}>
                        Giris Yap
                    </Text>
                </TouchableOpacity>
                <Text style={{color:"#aeaeae",marginTop:3}}>Kullanici Adi/Sifre Unuttum</Text>
            </View>
    )
}

export default SingIn
