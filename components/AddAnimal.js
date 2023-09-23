import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../storage/dataContext";

const AddAnimal = () => {
  const userContext = React.useContext(UserContext);
  const images = [
    require("../assets/images/horse1.jpeg"),
    require("../assets/images/horse2.jpeg"),
    require("../assets/images/horse3.jpeg"),
  ];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(-1);

  const addAnimal = async () => {
    const animalId = Math.floor(Math.random() * 10000);
    const animal = {
      id: animalId,
      title: name,
      description: description,
      url: images[selectedImage],
    };
    userContext.addAnimal(animal);
    setName("");
    setDescription("");
    setSelectedImage(-1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          multiline
          onChangeText={setDescription}
        />
        <Text style={styles.label}>Select Image</Text>
        <View style={styles.imageWrapper}>
          {images.map((item, index) => (
            <TouchableOpacity
              key={item}
              onPress={() => {
                setSelectedImage(index);
              }}
              style={[
                selectedImage === index ? styles.border : styles.borderless,
              ]}
            >
              <Image
                source={item.toString()}
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Add Animal"
            onPress={addAnimal}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    display: "flex",
    alignItems: "center",
  },
  card: {
    width: 300,
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 120,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    // borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  imageWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: "rgb(25, 171, 255)",
  },
});

export default AddAnimal;
