import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Modal, TouchableOpacity, Alert } from 'react-native'
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
        if (this.state.currentWebsite == "https://www.scubadiverdestinations.com/") {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com.au/",

            }
            )
        }
        if (this.state.currentWebsite == "https://www.scubadivermag.com/") {

        } else {
            this.setState({
                currentWebsite: "https://www.scubadivermag.com.au/",

            }
            )
        }if(this.state.currentWebsite=='https://www.scubadivermag.com.au/'){
            Alert.alert('Australia is Already Selected')
        }
    }


    UKSelected = () => {
        if (this.state.currentWebsite == "https://www.scubadivermag.com.au/") {
            this.setState({
                currentWebsite: "https://www.scubadiverdestinations.com/",

            }
            )
        }
        if (this.state.currentWebsite == "https://www.scubadivermag.com/") {

        } else {
            this.setState({
                currentWebsite: "https://www.scubadiverdestinations.com/",

            }
            )
        }if(this.state.currentWebsite=='https://www.scubadiverdestinations.com/'){
            Alert.alert('UK is Already Selected')
        }
    }
USSelected=()=>{
    if (this.state.currentWebsite == "https://www.scubadivermag.com.au/") {
        this.setState({
            currentWebsite: "https://www.scubadivermag.com/",

        }
        )
    }
    if (this.state.currentWebsite == "https://www.scubadiverdestinations.com/") {

    } else {
        this.setState({
            currentWebsite: "https://www.scubadivermag.com/",

        }
        )
    }if(this.state.currentWebsite=='https://www.scubadivermag.com/'){
        Alert.alert('US is Already Selected')
    }
}
    render() {
        const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Filter bar is closed');
                    }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '95%', alignContent: "center",alignSelf:'center' }}>

                        <View style={{ height: 200, width: '100%', backgroundColor: "white", width: '100%', alignItems: 'center', justifyContent: "center", alignContent: "center", }}>
                            <View>
                                <Text>Select Website </Text>
                            </View>
                            <View style={{ alignContent: 'center', flexDirection: 'row', width: '100%', alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
                                <TouchableOpacity
                                onPress={()=>this.UKSelected()}
                                style={{ padding: 10, margin: 5, alignSelf: 'center', marginTop: 40 }}>

                                    <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: "center" }}>UK </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                
                                onPress={()=>this.AusSelected()}
                                style={{  padding: 15, margin: 5,  alignSelf: 'center', marginTop: 40 }}>

                                    <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: "center" }}>Australia </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                onPress={()=>this.USSelected()}
                                style={{  padding: 10, margin: 5, alignSelf: 'center', marginTop: 40 }}>

                                    <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: "center" }}>US </Text>
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity 
                            style={{width:100,height:50,justifyContent:"center",alignItems:"center",}}
                            onPress={() => this.setState({ modalVisible: false })}>
                                <Text>Close</Text>


                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <WebView
                    originWhitelist={['*']}
                    source={{ uri: this.state.currentWebsite }}

                    style={{ marginTop: 20 }}
                />
                <TouchableOpacity
                style={{alignSelf:'center'}}
                onPress={() => this.setState({ modalVisible: true })}>
                    <Text>Filter Website</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})