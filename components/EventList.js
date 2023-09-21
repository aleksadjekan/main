import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import koala from "../assets/images/koala.jpeg";

const EventList = ({ events }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Events</Text>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View style={styles.events}>
            <View style={styles.wrapper}>
              <Image
                source={{ uri: koala }}
                style={{ width: 200, height: 200 }}
              />
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
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
  events: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    minWidth: "300px",
  },
  wrapper: {
    borderRightColor: "black",
    borderRightWidth: "1px",
    paddingRight: "10px",
  },
  name: {
    fontWeight: "bold",
    width: "200px",
  },
  description: {
    flex: 3,
    paddingLeft: "10px",
  },
  timestamp: {
    color: "#888888",
    marginTop: 5,
  },
});

export default EventList;
