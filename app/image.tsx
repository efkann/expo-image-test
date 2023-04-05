import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';

export default function image() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },
});
