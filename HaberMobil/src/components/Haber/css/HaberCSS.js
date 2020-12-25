import {StyleSheet ,Dimensions} from 'react-native'


const height=Dimensions.get("window").height;
const width=Dimensions.get("window").width;

export const styles=StyleSheet.create({
    conteiner:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    image:{
        width:width,
        height:height/3,
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end"
    },
    HaberTitle:{
        margin:15,
        color:"#000",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    HaberDetay:{
        margin:10,
        fontSize:15
    },
    Button:{
        width:width/3,
        textAlign:"center",
        margin:10,
        padding:10,
        backgroundColor:"#2196F3",
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        borderRadius:20
    }
})