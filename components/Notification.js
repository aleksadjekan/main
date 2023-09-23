import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NotificationList from "./NotificationList";
import UserContext from "../storage/dataContext";

const Notification = () => {
  const userContext = React.useContext(UserContext);

  return (
    <View style={styles.container}>
      <NotificationList
        notifications={userContext.notifications.filter(
          (not) => not.username === userContext.loginUser.username
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
  },
});

export default Notification;
