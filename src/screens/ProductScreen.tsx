import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Product Screen</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
  },
});

export default ProductScreen;
