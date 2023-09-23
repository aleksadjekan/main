import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../storage/dataContext";

const AnimalGrid = () => {
  const userContext = React.useContext(UserContext);
  const navigation = useNavigation();
  const [page, setPage] = useState();
  const itemToShow = 2;

  const imageData = userContext.animals;
  const clickOnAnimal = (item) => {
    userContext.selectAnimal(item);
    navigation.navigate("Animal");
  };
  const showMore = () => {
    setPage(page + 1);
  };
  const lesPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  const renderImage = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        clickOnAnimal(item);
      }}
      style={styles.imageWrapper}
    >
      <Image source={item.url.toString()} style={{ width: 300, height: 300 }} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={
          Platform.OS === "web"
            ? imageData.slice((page - 1) * itemToShow, page * itemToShow)
            : imageData
        }
        keyExtractor={(item) => item.id}
        renderItem={renderImage}
        numColumns={1}
      />
      {Platform.OS === "web" ? (
        <View style={styles.pagination}>
          {page > 1 ? (
            <TouchableOpacity
              onPress={() => {
                lesPage();
              }}
            >
              <Text style={styles.paginationText}>Previous Page</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
          {page < imageData.length / 2 - 1 ? (
            <TouchableOpacity
              style={styles.nextPage}
              onPress={() => {
                showMore();
              }}
            >
              <Text style={styles.paginationText}>Next Page</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      ) : (
        <></>
      )}
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
  pagination: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextPage: {
    marginLeft: "auto",
  },
  paginationText: {
    textDecorationLine: "underline",
  },
});

export default AnimalGrid;
