import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/Home';
import CameraScrin from './screens/CameraScreen';

const App =  createAppContainer(createStackNavigator(
  {
Home: {screen: HomeScreen},
Camera: {screen: CameraScrin}



},
{
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor:"#1287A5",
      height:40
    },
    headerTitleStyle: {
      color: "#ffffff",
      fontWeight: "bold"
    }

}

}
)
);

export default App;