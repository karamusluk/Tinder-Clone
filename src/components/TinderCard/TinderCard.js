import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";

export default function TinderCard({ user }) {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: user?.image,
        }}
        style={styles.image}
      >
        <View style={styles.image__innerContainer}>
          <Text style={styles.image__name}>{user?.name}</Text>
          <Text style={styles.image__bio}>{user?.bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#fefefe",
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
