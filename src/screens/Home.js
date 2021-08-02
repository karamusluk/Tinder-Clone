import React from "react";
import { StyleSheet, View } from "react-native";

import TinderCard from "../components/TinderCard";
import AnimatedStack from "../components/AnimatedStack";

import users from "../../assets/data/users";

export default Home = () => {
  const onSwipeLeft = (user) => {
    console.warn("swipe left", user.name);
  };
  const onSwipeRight = (user) => {
    console.warn("swipe right", user.name);
  };
  return (
    <View style={styles.container}>
      <AnimatedStack
        data={users}
        renderItem={({ item }) => <TinderCard user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
