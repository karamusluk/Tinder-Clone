import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
          }}
          style={styles.image}
        >
          <View style={styles.image__innerContainer}>
            <Text style={styles.image__name}>Elon Musk</Text>
            <Text style={styles.image__bio}>
              A dude with a rocket is looking for a gal with fuel
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  image__innerContainer: {
    padding: 10,
  },
  image__name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  image__bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 24,
  },
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
