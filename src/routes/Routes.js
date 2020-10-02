import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import Youtube from '../pages/Youtube'
import News from '../pages/News'
import NewsLetter from '../pages/Newsletter'
import Header from '../components/Header';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Youtube"  
      
      options={{tabBarVisible:false}}
      component={Youtube}/>
      <Tab.Screen name="NewsLetter" component={NewsLetter} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen 
      options={{headerShown:false}}
      name="Home" component={MyTabs} />
      <Stack.Screen
      options={{headerShown:false}}
      name="News" component={News}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}
