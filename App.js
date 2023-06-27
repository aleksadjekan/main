import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import { initalLocalStorage } from './storage/initialState';
import HomePage from './components/HomePage';


const Stack = createStackNavigator();

initalLocalStorage();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;