import React, { Component } from 'react'
import { Text, View,StyleSheet, StatusBar, Image,TouchableOpacity ,Dimensions} from 'react-native'
import {WebView} from 'react-native-webview'
import Header from '../components/Header'
export default class Newsletter extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
        return (
            <View style={styles.container}>

               
               <WebView
   
        source={{ uri: 'https://www.scubadivermag.com/newsletter-subscription/' }}
        
      />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight,
        height:Dimensions.get('window').height
    }
})