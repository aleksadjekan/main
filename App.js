import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { GlobalState, DataContext } from './storage/dataContext';
import { getUsers, initalLocalStorage } from './storage/initialState';

initalLocalStorage();

const Stack = createStackNavigator();

class App extends React.Component {
  static contextType = DataContext

  async componentDidMount() {
    const user = this.context
    console.log(user);
    const users = await getUsers();
    console.log(users);
    this.context.setUsers(users)
  }

  render() {
    return (
      <GlobalState>
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
      </GlobalState>
    );
  }
}

export default App;