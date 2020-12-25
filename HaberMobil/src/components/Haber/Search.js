import React,{useEffect,useState} from 'react'
import {View,Picker,Dimensions} from 'react-native'
import {Countries} from '../../../utils/Countries'

import {styles} from './css/SearchCSS'

let Width=Dimensions.get("window").width;
function Search(props){
    const [picker,setPicker]=useState([])
    useEffect(()=>{
        setPicker(Countries)
    },[])
    return (
        <View style={styles.conteiner}>
            <View>
                <Picker selectedValue={props.country} onValueChange={(itemValue, itemIndex) => {props.onChange(itemValue)}} itemStyle={styles.picker} style={[{height: 50, width: Width,color:"#000"}]}>
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

export default Search
