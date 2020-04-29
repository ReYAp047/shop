//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity,Text,StyleSheet } from 'react-native';
// import all basic components

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import external files
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (

<View style={{ flexDirection: 'row' }}>
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 32, height: 32, marginLeft: 10, marginTop: 7}}
          />
        </TouchableOpacity >
        </View>
        <View>

        <Image
          source={require('./image/logo.png')}
          style={{ width: 45, height: 45 , marginLeft: 15 ,marginRight: 10}}
        />

  </View>
 <View style={{flex: 1, flexDirection: 'column'}}>
    <View>
    <Text style={styles.titleText}>You Shop</Text>
    </View>

    <View>
    <Text style={{color:'white'}}>Invantaire</Text>
    </View>

  </View>

    <View style={{flexDirection: 'row'}}>
        <View>
            <Image
              source={require('./image/commande.png')}
              style={{ width: '45%', height: '75%' , marginLeft: '55%',marginTop: '5%'}}
            />
        </View>
        <View>
          <Text style={{color:'white', marginTop: 10}}>Commande</Text>
        </View>
    </View>

</View>
      );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({

      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0099FF',


      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 10,
        },
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Contoleur',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0099FF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Liveur',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0099FF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'listProduit',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contoleur',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Liveur',
    },
  },
});





const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Lucida Fax",
    fontSize: 15,
    color: "white",
    fontWeight: "bold"
  }
});

export default createAppContainer(DrawerNavigatorExample);
