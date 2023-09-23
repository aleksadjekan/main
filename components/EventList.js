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
import { ScrollView } from "react-native-gesture-handler";

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
      {events.map((item) => (
        <View style={styles.events} key={item.name}>
          <View style={styles.wrapper}>
            <Text style={styles.name}>{item.name}</Text>
            <Image
              source={item.imageSrc.toString()}
              style={{ width: 200, height: 200 }}
            />
          </View>
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
      ))}
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
    columnGap: 10,
    minWidth: 300,
    maxHeight: 480,
  },
  wrapper: {
    paddingBottom: 10,
  },
  name: {
    fontWeight: "bold",
    width: 200,
  },
  description: {
    flex: 3,
    paddingLeft: 10,
    maxWidth: 800,
  },
  timestamp: {
    color: "#888888",
    marginTop: 5,
  },
  likeButton: {
    marginTop: 50,
    marginLeft: 10,
  },
  icon: {
    color: "rgb(25, 171, 255)",
    marginRight: 4,
  },
  text: {
    color: "rgb(25, 171, 255)",
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
});

export default EventList;
