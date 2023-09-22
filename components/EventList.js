import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import UserContext from "../storage/dataContext";

import zoo1 from "../assets/images/zoo1.jpeg";
import zoo2 from "../assets/images/zoo2.jpeg";
import zoo3 from "../assets/images/zoo3.jpeg";
import zoo4 from "../assets/images/zoo4.jpeg";
import zoo5 from "../assets/images/zoo5.jpeg";
import zoo6 from "../assets/images/zoo6.jpeg";

const zooImages = [zoo1, zoo2, zoo3, zoo4, zoo5, zoo6];

const EventList = ({ events }) => {
  const userContext = React.useContext(UserContext);
  const isLiked = [];
  const like = (name) => {
    userContext.likeEvent(name);
    isLiked.push(name);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Events</Text>
      <FlatList
        data={events}
        renderItem={({ item, index }) => (
          <View style={styles.events}>
            <View style={styles.wrapper}>
              <Text style={styles.name}>{item.name}</Text>
              <Image
                source={{ uri: zooImages[index] }}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.description}>Likes: {item.num_likes}</Text>
              <TouchableOpacity
                onPress={() => like(item.name)}
                style={styles.likeButton}
              >
                <Text style={styles.text}>
                  <FontAwesomeIcon icon={faThumbsUp} style={styles.icon} />
                  Like
                </Text>
              </TouchableOpacity>
            </View>
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
    maxWidth: "800px",
  },
  timestamp: {
    color: "#888888",
    marginTop: 5,
  },
  likeButton: {
    marginTop: "50px",
    marginLeft: "10px",
  },
  icon: {
    color: "rgb(25, 171, 255)",
    marginRight: 4,
  },
  text: {
    color: "rgb(25, 171, 255)",
    display: "flex",
    alignItems: "center",
  },
});

export default EventList;
