import React,{useState,useEffect} from 'react'
import Search from './Search'
import axios from 'axios'
import {View,Text,ImageBackground,Dimensions,TouchableWithoutFeedback } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
const height=Dimensions.get("window").height;
const width=Dimensions.get("window").width;
function Market({navigation}) {
    const [country,setCountry]=useState("TR");
    const [news,setNews]=useState([])
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c34779a5be2d4cd88537c301034d30d2`)
        .then(response => {
            setNews(response.data.articles)
        }).catch(error => {
        console.log(error)
        })
    },[country])
    
    const RenderItem =({ item,index }) => {
        return (
            <View key={index}>
                <ImageBackground key={index} resizeMode={"contain"} source={{uri:item.urlToImage}} style={{width:width,height:height/3}}/>
                <Text >{item.title}</Text>
                <Text>{item.description}</Text>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Web', { url:item.url })}>
                    <Text>Habere Git</Text>
                </TouchableWithoutFeedback>
            </View>
        );
      }
    return (
        <>
            <Search country={country} onChange={val=>setCountry(val)}/>
            <AppIntroSlider 
                renderItem={RenderItem}
                data={news}
                dotStyle={{backgroundColor:'#D3D3D3'}}
                activeDotStyle={{backgroundColor:'#256F15'}}
                showNextButton={false}
                keyExtractor={(item, index) => 'key'+index}
                doneLabel={""}
            />
        </>
    )
}

export default Market