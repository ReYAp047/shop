import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Bienvenue from './src/app/Bienvenue';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <Bienvenue/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
