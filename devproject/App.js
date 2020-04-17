import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import devprograming from './programer.json';
import webdevelop from './web-development.json';

// import { Container } from './styles';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems:'center'}} >
      <LottieView resizeMode="contain" autoSize source={devprograming} autoPlay loop />
      <Text style={{color:"#808080", fontWeight:"bold", fontSize:28 }}>Área em Desenvolvimento</Text>
      <LottieView style={{ width:200 , height:200 }} resizeMode="contain" source={webdevelop} autoPlay loop />
    </SafeAreaView>
  );
}
