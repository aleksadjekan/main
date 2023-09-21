import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";

import koala from "../assets/images/koala.jpeg";
import lion from "../assets/images/lion.jpeg";
import panda from "../assets/images/panda.jpeg";
import slon from "../assets/images/slon.jpeg";
import zirafa from "../assets/images/zirafa.jpeg";
import bear from "../assets/images/bear.jpeg";
import hipo from "../assets/images/hipo.jpeg";
import gorila from "../assets/images/gorila.jpeg";
import zebra from "../assets/images/zebra.jpeg";
import snake from "../assets/images/snake.jpeg";
import turtle from "../assets/images/turtle.jpeg";

const ImageGrid = () => {
  const imageData = [
    // Add your image URLs here
    { id: "1", url: koala, title: "Coala" },
    { id: "2", url: lion, title: "Lion" },
    { id: "3", url: panda, title: "Panda" },
    { id: "4", url: slon, title: "Elephant" },
    { id: "5", url: zirafa, title: "Giraffe" },
    { id: "6", url: bear, title: "Bear" },
    { id: "7", url: hipo, title: "Hippo" },
    { id: "8", url: gorila, title: "Gorila" },
    { id: "9", url: zebra, title: "Zebra" },
    { id: "10", url: snake, title: "Snake" },
    { id: "11", url: turtle, title: "Turtle" },
    // Add more images as needed
  ];

  const renderImage = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={imageData}
        keyExtractor={(item) => item.id}
        renderItem={renderImage}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    textAlign: "center",
    padding: 10,
  },
  container: {
    padding: 16,
  },
  item: {
    flex: 1,
    margin: 8,
    aspectRatio: 1, // Maintain aspect ratio
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
});

export default ImageGrid;
