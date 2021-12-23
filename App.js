import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './src/Screens/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />   
    </View>
  );
};

const styles = StyleSheet.create({
 text: {
   fontSize: 24
 },
 container: {
   flex: 1,   
 }
});

export default App;
