import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Modal, TouchableOpacity, Alert, SafeAreaView, Dimensions } from 'react-native'
import { Container, Header, Button, Icon, Fab } from 'native-base';
import { WebView } from 'react-native-webview'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Newsletter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            modalVisible: false,
            currentWebsite: 'https://www.scubadivermag.com.au/',
            ChipWidth1: 1,



        }

    }

    AusSelected = () => {
        if (this.state.currentWebsite == "http://www.scubadiverdestinations.com/") {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com.au/",

            }
            )
        }
        if (this.state.currentWebsite == "https://www.scubadivermag.com") {

        } else {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com.au/",

            }
            )
        } if (this.state.currentWebsite == 'https://www.scubadivermag.com.au/') {
            Alert.alert('Australia is Already Selected')
        }
    }


    UKSelected = () => {
        if (this.state.currentWebsite == "https://www.scubadivermag.com.au/") {
            this.setState({
                currentWebsite: "http://www.scubadiverdestinations.com/",

            }
            )
        }
        if (this.state.currentWebsite == "https://www.scubadivermag.com/") {

        } else {
            this.setState({
                currentWebsite: "http://www.scubadiverdestinations.com/",

            }
            )
        } if (this.state.currentWebsite == 'http://www.scubadiverdestinations.com/') {
            Alert.alert('UK is Already Selected')
        }
    }
    USSelected = () => {
        if (this.state.currentWebsite == "https://www.scubadivermag.com.au/") {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com/",

            }
            )
        }
        if (this.state.currentWebsite == "http://www.scubadiverdestinations.com/") {

        } else {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com",

            }
            )
        } if (this.state.currentWebsite == 'https://www.scubadivermag.com/') {
            Alert.alert('US is Already Selected')
        }
    }
    HomeSelected = () => {
        if (this.state.currentWebsite == "https://www.scubadivermag.com.au/") {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com.au/",

            }
            )
        }
        if (this.state.currentWebsite == "http://www.scubadiverdestinations.com/") {

        } else {
            this.setState({
                currentWebsite: "http://www.scubadiverdestinations.com/",

            }
            )
        } if (this.state.currentWebsite == 'https://www.scubadivermag.com/') {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com/",

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
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Filter bar is closed');
                        }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '95%', alignContent: "center", alignSelf: 'center' }}>

                            <View style={{ backgroundColor: 'rgb(24, 96, 172)', height: 200, width: '100%', width: '100%', alignItems: 'center', justifyContent: "center", alignContent: "center", }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", color: 'white', textAlign: 'center' }}>Select Region </Text>
                                </View>
                                <View style={{ alignContent: 'center', flexDirection: 'row', width: '100%', alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() => this.setState({currentWebsite:'http://www.scubadiverdestinations.com/'})}
                                        style={{width: 100,margin:5, height: 50, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "white", marginTop: 10  }}>
                                      
                                        <Text style={{ fontSize: 12,color:"white", fontWeight: 'bold', alignSelf: "center", textAlign: "center" }}>UK </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity

                                        onPress={() => this.setState({currentWebsite:'https://www.scubadivermag.com.au'})}
                                        // style={{ padding: 15, margin: 5, alignSelf: 'center', height: 40, marginTop: 40, backgroundColor: 'white', width: '25%' }}
                                        style={{width: 100, height: 50,margin:5, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "white", marginTop: 10  }}>
                                        
                                

                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color:'white',alignSelf: "center", textAlign: 'center' }}>Australia </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() =>this.setState({currentWebsite:'https://www.scubadivermag.com/'})}
                                        style={{width: 100, height: 50, margin:5,justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "white", marginTop: 10  }}>

                                        <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: "center",color:'white' }}>US </Text>
                                    </TouchableOpacity>

                                </View>

                                <TouchableOpacity
                                    style={{ width: 100, height: 50, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "white", marginTop: 10 }}
                                    onPress={() => this.setState({ modalVisible: false })}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Close</Text>


                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>


                    <WebView
                        originWhitelist={['*']}
                        source={{ uri: this.state.currentWebsite }}

                        style={{ marginTop: 20 }}
                    />
                    <View style={{ backgroundColor: 'rgb(24, 96, 172)', width: '100%' }}>

                        <TouchableOpacity
                            style={{ alignSelf: 'center' }}
                            onPress={() => this.setState({ modalVisible: true })}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>Click Here to Select Region</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'rgb(24, 96, 172)', width: '100%', borderWidth: 1, borderColor: 'white' }}>

                        <TouchableOpacity
                            onPress={() => this.HomeSelected()}
                            style={{ alignSelf: 'center' }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white", borderColor: 'black' }}>Click Here to Go to Home Screen</Text>
                        </TouchableOpacity>
                    </View>
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