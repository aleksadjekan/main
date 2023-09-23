import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import UserContext from "../storage/dataContext";
import React from "react";
import OrderList from "../components/OrderList";

const EmployeeHomePage = () => {
  const userContext = React.useContext(UserContext);
  return (
    <View style={styles.container}>
      <OrderList orders={userContext.orders} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    overflowY: "auto",
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
