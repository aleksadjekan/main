import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import UserContext from "../storage/dataContext";
import React from "react";

const EmployeeHomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: "red",
    paddingBottom: 16,
  },
});

export default EmployeeHomePage;
