import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const CurrencyConverterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wetip Currency Converter</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default CurrencyConverterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa044f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 68,
  },
});
