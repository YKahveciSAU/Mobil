import React,{useEffect,useState} from 'react'
import {View,Picker,StyleSheet,Dimensions} from 'react-native'
import {Countries} from '../../../utils/Countries'
let Width=Dimensions.get("window").width;
function Search(props){
    const [picker,setPicker]=useState([])
    useEffect(()=>{
        setPicker(Countries)
    },[])
    return (
        <View style={styles.conteiner}>
            <View>
                <Picker style={[{height: 50, width: Width,color:"#000",fontSize:20}]} selectedValue={props.country} onValueChange={(itemValue, itemIndex) => {props.onChange(itemValue)}} itemStyle={styles.picker}>
                    {
                        picker.map((pick,index) => 
                                <Picker.Item key={index} label={pick.name} value={pick.code} />
                            )
                    }
                </Picker>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    picker:{
        borderRadius:20,
        backgroundColor:"#c8c6cc",
        margin:10,
        height:30,
        textAlign:"center",
        fontSize:20,
        alignItems:"center"
    },
    conteiner:{
        backgroundColor:"#f8f6f8",
        borderWidth:1,
        borderColor:"#f0eff0",
        elevation: 3,
        marginTop:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Search
