import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    margin: 20,
    borderRadius: 10,
    borderStyle: "solid",
    backgroundColor: "#cdf",
    color: "#000",
  },
  cardContent: {
    margin: 20,
  },
});
