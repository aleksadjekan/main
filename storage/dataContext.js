import React, { Component } from "react";
import {
  getAnimals,
  getComments,
  getEvents,
  getLoggedInUser,
  getNotifications,
  getPaketi,
  getSelectedAnimal,
  getUsers,
  setLoggedInUser,
} from "./initialState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "./types";
import { Platform } from "react-native";

export const UserContext = React.createContext(null);

class UserProvider extends Component {
  // Context state
  state = {
    loginUser: null,
    users: [],
    events: [],
    notifications: [],
    animals: [],
    selectedAnimal: null,
    comments: [],
    paketi: [],
  };

  // Method to update state
  setUsers = (users) => {
    this.setState({ ...this.state, users: users });
  };
  setLoginUser = (user) => {
    this.setState({ ...this.state, loginUser: user });
  };
  setNotifications = (notifications) => {
    this.setState({ ...this.state, notifications: notifications });
  };
  setEvents = (events) => {
    this.setState({ ...this.state, events: events });
  };
  setAnimals = (animals) => {
    this.setState({ ...this.state, animals: animals });
  };
  setSelectedAnimal = (animal) => {
    this.setState({ ...this.state, selectedAnimal: animal });
  };
  setComments = (comments) => {
    this.setState({ ...this.state, comments: comments });
  };
  setPaketi = (paketi) => {
    this.setState({ ...this.state, paketi: paketi });
  };

  async syncUsersWithStorage() {
    const users = await getUsers();
    const notifications = await getNotifications();
    const loginUser = await getLoggedInUser();
    const events = await getEvents();
    const animals = await getAnimals();
    const selectedAnimal = await getSelectedAnimal();
    const comments = await getComments();
    const paketi = await getPaketi();

    if (loginUser !== null) this.setLoginUser(loginUser);
    this.setState({
      users: users,
      loginUser: loginUser,
      notifications: notifications,
      events: events,
      animals: animals,
      selectedAnimal: selectedAnimal,
      comments: comments,
      paketi: paketi,
    });
  }

  async componentDidMount() {
    this.syncUsersWithStorage();
  }

  async loginAction(user) {
    if (typeof user !== "undefined") {
      if (user.userType === UserType.Employee && Platform.OS !== "web") {
        return false;
      }
      await AsyncStorage.setItem("loginUser", JSON.stringify(user));
      const response = await setLoggedInUser(user);
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
    const {
      loginUser,
      users,
      notifications,
      events,
      animals,
      selectedAnimal,
      comments,
      paketi,
    } = this.state;
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
    const {
      likeEvent = async (name) => {
        const idx = this.state.events.findIndex((n) => {
          return n.name === name;
        });
        if (idx !== -1) {
          const newEvents = this.state.events;
          newEvents[idx].num_likes++;
          this.setEvents(newEvents);
          await AsyncStorage.setItem("events", JSON.stringify(newEvents));
        }
      },
    } = this;
    const {
      selectAnimal = async (animal) => {
        this.setSelectedAnimal(animal);
        await AsyncStorage.setItem("selectedAnimal", JSON.stringify(animal));
      },
    } = this;

    const {
      addComment = async (text, id, user) => {
        const komentar = {
          animal_id: id,
          username: user,
          description: text,
        };
        const komentari = this.state.comments;
        komentari.unshift(komentar);
        this.setComments(komentari);
        await AsyncStorage.setItem("comments", JSON.stringify(komentari));
      },
    } = this;

    return (
      <UserContext.Provider
        value={{
          loginUser,
          users,
          notifications,
          events,
          animals,
          selectedAnimal,
          comments,
          paketi,
          setUsers,
          setLoginUser,
          setNotifications,
          loginAction,
          logoutAction,
          selectAnimal,
          likeEvent,
          readNotification,
          updateUser,
          addComment,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;

export { UserProvider };
