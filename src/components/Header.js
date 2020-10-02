import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";


export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
            <View
              style={{
                padding: 10,
                width: "15%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={() => this.props.navigation.dangerouslyGetParent().openDrawer()}>
                <Feather name="menu" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                padding: 5,
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
             onPress={()=>this.props.navigation.navigate('News')} 
             
              >
      
              <Image
                style={{ height: 50, width:250 , resizeMode: "contain" }}
                source={require("../images/Scuba-Diver.png")}
                />
                </TouchableOpacity>
            </View>
            <View
              style={{
                width: "15%",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity >
      
              <FontAwesome name="search" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    marginTop: StatusBar.currentHeight,
    height: 60,
    flexDirection: "row",
    borderBottomColor:'grey',
    borderBottomWidth:0.3,
  
  },
});
