import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LoginResponse } from '../storage/actions';
import { loginUser } from '../storage/actions';
import { DataContext } from '../storage/dataContext';

const Login = ({ navigation }) => {
  const dataContext = React.useContext(DataContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    console.log(dataContext);
    const response = await loginUser(username, password);
    if (response === LoginResponse.Success) {
      navigation.navigate('HomePage');
    }
    else {
      setError("Wrong credentials!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Text style={styles.errorText}>
        {error}
      </Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    paddingBottom: 16,
  }
});

export default Login;
