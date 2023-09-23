import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import UserContext from "../storage/dataContext";

const NotificationList = ({ notifications }) => {
  const userContext = React.useContext(UserContext);
  const readNotification = async (id) => {
    await userContext.readNotification(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={({ item, index }) => (
          <View style={styles.notification}>
            <Text>{index}</Text>
            <Text>{item.notificationType}</Text>
            {!item.read && (
              <TouchableOpacity
                style={styles.readButton}
                onPress={() => readNotification(item.id)}
              >
                <Text style={styles.readLabel}>Read</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notification: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    marginBottom: 10,
    // borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    minWidth: 300,
  },
  readButton: {
    backgroundColor: "#19ABFF",
    // borderRadius: 5,
    padding: 5,
    marginLeft: "auto",
  },
  readLabel: {
    color: "white",
  },
  timestamp: {
    color: "#888888",
    marginTop: 5,
  },
});

export default NotificationList;
