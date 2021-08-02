import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Matches from "./src/screens/Matches";

export default function App() {
  return (
    <View style={styles.container}>
      <Matches />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
