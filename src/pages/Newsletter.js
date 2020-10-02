import React, { Component } from 'react'
import { Text, View,StyleSheet, StatusBar } from 'react-native'

export default class Newsletter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> NewsLetter</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
    }
})