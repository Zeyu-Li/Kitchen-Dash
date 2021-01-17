import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Converter from './Convertor'

export default function Helper() {
  return (
    <View style={styles.container}>
      <Text style={[styles.containerTitle]}>Converter</Text>
      <Converter />
        <View style={styles.convertContainer}>
          <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
  },
  containerTitle: {
    color: '#ededed',
    fontSize: 64,
    paddingTop: 20,
    flex: 1,
  },
  convertContainer: {
    flex: 1,
  },
});
