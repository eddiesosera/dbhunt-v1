import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import Map from './components/Map';

Mapbox.setAccessToken('pk.eyJ1IjoiZWRkaWVvd2kiLCJhIjoiY2x2cjZsdTI1MDV3bDJxbzlpM2Q4YmkzMyJ9.5OBJ64S7Dq7CBgNk9aHvng');

const App = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.textHeader}>DBHunt Maps Practise</Text>
      <Map />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});