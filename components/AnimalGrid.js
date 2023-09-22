import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../storage/dataContext";

const AnimalGrid = () => {
  const userContext = React.useContext(UserContext);
  const navigation = useNavigation();
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const imageData = userContext.animals;
  const clickOnAnimal = (item) => {
    userContext.selectAnimal(item);
    navigation.navigate("Animal");
  };

  const renderImage = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        clickOnAnimal(item);
      }}
      style={styles.imageWrapper}
    >
      <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
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

export default AnimalGrid;
