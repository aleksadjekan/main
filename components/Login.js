import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { UserContext } from "../storage/dataContext";

const Login = ({ navigation }) => {
  const userContext = React.useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const users = userContext.users;
    const idx = users.findIndex(
      (user) => user.username === username && user.password === password
    );
    const response = await userContext.loginAction(users[idx]);
    if (response) {
      navigation.navigate("HomePage");
    } else {
      setError("Wrong credentials!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Text style={styles.errorText}>{error}</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
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

export default Login;
