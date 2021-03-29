import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#0d9",
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
    alignSelf: "center",
    margin: 8,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 18,
    padding: 10,
    borderRadius: 6,
  },
  errorText: {
    marginBottom: 10,
    marginTop: 6,
    color: "crimson",
    fontWeight: "bold",
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
