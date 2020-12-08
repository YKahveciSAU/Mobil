import React from 'react'
import {WebView} from 'react-native-webview'
function Web({route}){
    return <WebView source={{ uri: route.params?.url }} />;
}
export default Web