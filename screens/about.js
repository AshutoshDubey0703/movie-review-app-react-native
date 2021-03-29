import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/global";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
