import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from "react-native";

import users from "../../assets/data/users";

const Matches = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.newMatchesText}>Matches</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ maxHeight: 120 }}
      >
        <View style={styles.users}>
          {users &&
            users.map((user) => {
              console.log(user);
              return (
                <View key={user.id} style={styles.user}>
                  <Image
                    source={{ uri: user.image }}
                    style={styles.userImage}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Matches;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    padding: 15,
  },
  container: {
    padding: 10,
  },
  newMatchesText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#F6366E",
  },
  users: {
    flexDirection: "row",
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    borderColor: "#F6366E",
  },
  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});
