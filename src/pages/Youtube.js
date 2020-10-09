import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity,SafeAreaView ,Dimensions} from 'react-native'
import { WebView } from 'react-native-webview'
import Header from '../components/Header'
export default class Newsletter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentWebsite: 'https://www.youtube.com/c/ScubaDiverMagazine/videos'
        }

    }
    HomeSelected = () => {
        if (this.state.currentWebsite == "https://www.youtube.com/c/ScubaDiverMagazine/videos") {
            this.setState({
                currentWebsite: "https://www.youtube.com/c/ScubaDiverMagazine/videos",

            }
            )
        }
    }
    render() {
        const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
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
                <View style={{ width: '100%', backgroundColor: "white", borderBottomColor: 'grey', borderBottomWidth: 0.3, height: 60, alignContent: 'center', alignItems: "center", justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('News')}>

                        <Image source={require('../images/Scuba-Diver.png')} resizeMode="stretch" style={{ height: 50, width: 200 }} />
                    </TouchableOpacity>
                </View>

                <WebView
                    originWhitelist={['*']}
                    source={{ uri: this.state.currentWebsite }}

                />
       
            </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})