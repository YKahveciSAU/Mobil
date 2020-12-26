import React,{useState,useEffect,useRef} from 'react'
import {View,Text,ImageBackground,Dimensions,TouchableWithoutFeedback,StyleSheet } from 'react-native'
import Search from '../Haber/Search'
import axios from 'axios'
import AppIntroSlider from 'react-native-app-intro-slider';

import { sendNotificationToAllUsers} from '../../../utils/RegisterNotifications'

import {styles} from './css/HaberCSS'
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
            <View key={index} style={styles.conteiner}>
                <View>
                    <ImageBackground key={index} resizeMode={"stretch"} source={{uri:item.urlToImage}} style={styles.image}/>
                    <Text style={styles.HaberTitle}>
                        {
                            String(item.title).length < 60 ? String(item.title) : (String(item.title).substring(0,60)+"...")
                        }
                    </Text>
                    <Text style={styles.HaberDetay}>
                        {String(item.description).substring(0,200)}...
                    </Text>
                </View>
                
                <View style={{display:"flex",flex:1,flexDirection:"row",marginBottom:height/10,justifyContent:"center",alignItems:"flex-end"}}>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Web', { url:item.url })}}>
                        <Text style={styles.Button}>
                            HABERE GIT
                        </Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{sendNotificationToAllUsers(item.title,item.url)}}>
                        <Text style={styles.Button}>
                            BILDIRIM YAP
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
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