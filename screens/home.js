import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { id: "1", title: "Avengers", rating: 5, body: "It was the best movie" },
    { id: "2", title: "Thor", rating: 4, body: "It was very good movie" },
    {
      id: "3",
      title: "Captain America",
      rating: 3,
      body: "It was a good movie",
    },
    {
      id: "4",
      title: "Guardians of the Galaxy",
      rating: 2,
      body: "It was a bad movie",
    },
    { id: "5", title: "Iron Man", rating: 1, body: "It was very bad movie" },
  ]);

  const addReview = (review) => {
    console.log(review);
    review.id = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setIsModelOpen(false);
  };

  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOnPress = () => {
    navigation.navigate("Review Details");
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={isModelOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, marginTop: 20, marginBottom: 0 }}
              onPress={() => setIsModelOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={36}
        style={styles.modalToggle}
        onPress={() => setIsModelOpen(true)}
      />

      <Text style={globalStyles.titleText}>Home Page</Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Review Details", item);
              }}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: { flex: 1 },
  modalToggle: {
    alignSelf: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f2f2f2",
    borderRadius: 10,
  },
});
export default Home;
