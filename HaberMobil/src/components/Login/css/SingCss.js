import {StyleSheet,Dimensions} from 'react-native'

const Height=Dimensions.get("window").height;
const Width=Dimensions.get("window").width;

export const styles=StyleSheet.create({
    conteiner:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        height:Height,
        flex:1
    },
    icon:{
        display:"flex",
        alignItems:"center",
        marginBottom:30
    },
    input:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        margin:3,
        marginTop:10,
        padding:10,
        borderWidth:1,
        paddingLeft:15,
        paddingRight:10,
        backgroundColor:"#eee",
        borderColor:"#eee",
        borderRadius:10
    },
    login:{
        backgroundColor:"#57b847",
        margin:3,
        marginTop:10,
        padding:10,
        width:Width/2,
        borderRadius:10,
        color:"#fff",
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold"
    },
    forget:{
        color:"#aeaeae",
        marginTop:3
    }
})