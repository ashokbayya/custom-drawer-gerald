import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const Contact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>This is Contact Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: { flex: 1, zIndex: 1, opacity: 1 },
});
