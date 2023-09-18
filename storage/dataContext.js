import React, { Component } from 'react';
import { getLoggedInUser, getUsers, setLoggedInUser } from './initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = React.createContext(null);

class UserProvider extends Component {
  // Context state
  state = {
    loginUser: null,
    users: [],
    animals: []
  }

  // Method to update state
  setUsers = (users) => {
    this.setState({ ...this.state, users: users })
  }
  setLoginUser = (user) => {
    this.setState({ ...this.state, loginUser: user })
  }

  async syncUsersWithStorage() {
    const users = await getUsers();
    this.setUsers(users);

    const loginUser = await getLoggedInUser();
    if (loginUser !== null)
      this.setLoginUser(loginUser);
  }

  async componentDidMount() {
    this.syncUsersWithStorage();
  }

  async loginAction(user) {
    if (typeof user !== 'undefined') {
      await AsyncStorage.setItem('loginUser', JSON.stringify(user))
      const response = await setLoggedInUser(user);
      console.log(response);
      if (response) {
        this.setLoginUser(user);
      }
      return response;
    }
    return false;
  }

  async updateUser(user) {
    this.setLoginUser(user);
    this.setUsers(users);
    await AsyncStorage.setItem('loginUser', JSON.stringify(user));
    await AsyncStorage.setItem('users', JSON.stringify(this.users))
  }

  async logoutAction() {
    this.setLoginUser({});
    await AsyncStorage.removeItem('loginUser');
  }

  render() {
    const { children } = this.props;
    const { loginUser, users, animals } = this.state
    const { setUsers, setLoginUser, loginAction, logoutAction, updateUser } = this

    return (
      <UserContext.Provider
        value={{ loginUser, animals, users, setUsers, setLoginUser, loginAction, logoutAction, updateUser }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }