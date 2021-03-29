import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const handleOnPres = () => {
    console.log("hey");
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      // source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={40}
        color="#fff"
        style={styles.icon}
        onPress={handleOnPres}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    color: "#fff",
  },
  icon: {
    position: "absolute",
    left: -50,
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});
