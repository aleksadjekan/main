import React, { Component } from "react";
import {
  getEvents,
  getLoggedInUser,
  getNotifications,
  getUsers,
  setLoggedInUser,
} from "./initialState";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = React.createContext(null);

class UserProvider extends Component {
  // Context state
  state = {
    loginUser: null,
    users: [],
    events: [],
    notifications: [],
  };

  // Method to update state
  setUsers = (users) => {
    console.log(users);
    this.setState({ ...this.state, users: users });
  };
  setLoginUser = (user) => {
    this.setState({ ...this.state, loginUser: user });
  };
  setNotifications = (notifications) => {
    this.setState({ ...this.state, notifications: notifications });
  };

  async syncUsersWithStorage() {
    const users = await getUsers();
    const notifications = await getNotifications();
    const loginUser = await getLoggedInUser();
    const events = await getEvents();

    if (loginUser !== null) this.setLoginUser(loginUser);
    this.setState({
      users: users,
      loginUser: loginUser,
      notifications: notifications,
      events: events,
    });
  }

  async componentDidMount() {
    this.syncUsersWithStorage();
  }

  async loginAction(user) {
    if (typeof user !== "undefined") {
      await AsyncStorage.setItem("loginUser", JSON.stringify(user));
      const response = await setLoggedInUser(user);
      console.log(response);
      if (response) {
        this.setLoginUser(user);
      }
      return response;
    }
    return false;
  }

  async logoutAction() {
    this.setLoginUser({});
    await AsyncStorage.removeItem("loginUser");
  }

  render() {
    const { children } = this.props;
    const { loginUser, users, notifications, events } = this.state;
    const {
      setUsers,
      setLoginUser,
      loginAction,
      logoutAction,
      setNotifications,
    } = this;

    const {
      updateUser = async (user) => {
        const idx = this.state.users.findIndex((u) => {
          return u.email === user.email;
        });
        if (idx !== -1) {
          const newUsers = this.state.users;
          newUsers[idx] = user;
          this.setUsers(newUsers);
          await AsyncStorage.setItem("users", JSON.stringify(users));
        }
        this.setLoginUser(user);
        await AsyncStorage.setItem("loginUser", JSON.stringify(user));
      },
    } = this;
    const {
      readNotification = async (id) => {
        const idx = this.state.notifications.findIndex((n) => {
          return n.id === id;
        });
        if (idx !== -1) {
          const newNotification = this.state.notifications;
          newNotification[idx].read = true;
          this.setNotifications(newNotification);
          await AsyncStorage.setItem(
            "notifications",
            JSON.stringify(newNotification)
          );
        }
      },
    } = this;

    return (
      <UserContext.Provider
        value={{
          loginUser,
          users,
          notifications,
          events,
          setUsers,
          setLoginUser,
          setNotifications,
          loginAction,
          logoutAction,
          readNotification,
          updateUser,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;

export { UserProvider };
