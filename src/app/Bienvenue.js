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

      <ImageBackground style={ styles.image }  resizeMode='cover' source={'./src/images/back.jpg'}>
        <View style={styles.container}>
            <Image
              style={styles.Logo}
              source={'./src/images/logo.png'}
            />
        </View>
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
    width: '100%',
    height: '100%',
    flex: 1
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
