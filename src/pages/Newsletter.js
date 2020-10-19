import React, { Component } from 'react'
import { Text, View,StyleSheet, StatusBar, Image,TouchableOpacity ,Dimensions,SafeAreaView} from 'react-native'
import {WebView} from 'react-native-webview'
import Header from '../components/Header'
export default class Newsletter extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const HEIGHT = Dimensions.get("window").height;
      
        return (
            <SafeAreaView
            style={{
              width: "100%",
              backgroundColor: 'white',
              height: HEIGHT,
              flex: 1,
              marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
            }}
          >
            <View style={styles.container}>

               
               <WebView
   
        source={{ uri: 'https://www.scubadivermag.com/newsletter-subscription/' }}
        
      />
            </View>
            </SafeAreaView>
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