import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";

const ReviewDetails = ({ navigation, route }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details Page</Text>
      <Card>
        <Text style={globalStyles.titleText}>{route.params?.title}</Text>
        <Text>{route.params?.body}</Text>
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[route.params?.rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    justifyContent: "center",
  },
});
