import React from 'react';
import {View,
        Text,
        ImageBackground ,
        Image,
        StyleSheet
              } from 'react-native';


export default class Bienvenue extends React.Component{
  render(){
    return(

      <ImageBackground style={ styles.image }  resizeMode='cover'
      source={require('../images/back.jpg')}>

      <Text> test</Text>

      </ImageBackground>

  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
           width: '100%',
           height: '100%'
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  Logo: {
   width: 50,
   height: 50,
 },

});
