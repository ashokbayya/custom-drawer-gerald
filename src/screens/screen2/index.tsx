import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const Screen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Second Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: { flex: 1, zIndex: 1, opacity: 1 },
});
