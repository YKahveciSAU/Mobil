import React,{useState,useEffect,useRef} from 'react'
import Search from './Search'
import axios from 'axios'
import {View,Text,ImageBackground,Dimensions,TouchableWithoutFeedback } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
const height=Dimensions.get("window").height;
const width=Dimensions.get("window").width;
function Market({navigation}) {
    const [country,setCountry]=useState("TR");
    const [news,setNews]=useState([])
    const slider = useRef();
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c34779a5be2d4cd88537c301034d30d2`)
        .then(response => {
            setNews(response.data.articles)
        }).catch(error => {
        console.log(error)
        })
        slider.current.goToSlide(0, true)
    },[country])
    
    const RenderItem =({ item,index }) => {
        return (
            <View key={index} style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"space-between"}}>
                <View>
                    <ImageBackground key={index} resizeMode={"stretch"} source={{uri:item.urlToImage}} style={{width:width,height:height/3,display:"flex",flexDirection:"row",alignItems:"flex-end"}}/>
                    <Text style={{margin:15,color:"#000",fontSize:20,fontWeight:"bold",textAlign:"center"}}>{item.title}</Text>
                    <Text style={{margin:10,fontSize:15}}>{String(item.description).substring(0,200)}...</Text>
                </View>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Web', { url:item.url })}>
                    <Text style={{marginBottom:height/10,textAlign:"center",margin:10,padding:50,paddingTop:10,paddingBottom:10,backgroundColor:"#2196F3",color:"#fff",fontSize:20,fontWeight:"bold"}}>HABERE GIT</Text>
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
                ref={(ref) => (slider.current = ref)}
            />
        </>
    )
}

export default Market