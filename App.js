import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import EmployeeHomePage from "./components/EmployeeHomePage";
import ContactInfo from "./components/ContactInfo";
import Events from "./components/Events";
import Animals from "./components/Animals";
import Animal from "./components/Animal";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import UpdatePassword from "./components/UpdatePassword";
import LogoutHeader from "./components/LogoutHeader";
import UserContext, { UserProvider } from "./storage/dataContext";
import { initalLocalStorage } from "./storage/initialState";
import { UserType } from "./storage/types";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

initalLocalStorage();

class App extends React.Component {
  static contextType = UserContext;
  render() {
    const context = this.context;
    return (
      <UserProvider>
        <MyNavigation />
      </UserProvider>
    );
  }
}

function HomeStack() {
  const userContext = React.useContext(UserContext);
  const isEmployee =
    userContext.loginUser !== null &&
    userContext.loginUser.userType === UserType.Employee;
  return (
    <Drawer.Navigator initialRouteName="Home">
      {!isEmployee ? (
        <>
          <Drawer.Screen
            name="Home"
            component={HomePage}
            options={{
              title: "Home Page",
              headerRight: () => <LogoutHeader />,
            }}
          />
          <Drawer.Screen
            name="Events"
            component={Events}
            options={{
              title: "Events",
              headerRight: () => <LogoutHeader />,
            }}
          />
          <Drawer.Screen
            name="ContactInfo"
            component={ContactInfo}
            options={{
              title: "Contact",
              headerRight: () => <LogoutHeader />,
            }}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Home"
            component={EmployeeHomePage}
            options={{
              title: "Home Page",
              headerRight: () => <LogoutHeader />,
            }}
          />
        </>
      )}
      <Drawer.Screen
        name="Animals"
        component={Animals}
        options={{
          title: "Animals",
          headerRight: () => <LogoutHeader />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerRight: () => <LogoutHeader />,
        }}
      />
      <Drawer.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{
          title: "Change Password",
          headerRight: () => <LogoutHeader />,
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerItemStyle: { height: 0 },
          title: "Notification",
          headerRight: () => <LogoutHeader />,
        }}
      />
      <Drawer.Screen
        name="Animal"
        component={Animal}
        options={{
          drawerItemStyle: { height: 0 },
          title: "Animal",
          headerRight: () => <LogoutHeader />,
        }}
      />
    </Drawer.Navigator>
  );
}

function MyNavigation() {
  const linking = {
    screens: {},
  };
  const userContext = React.useContext(UserContext);
  const logged =
    userContext.loginUser !== null &&
    Object.keys(userContext.loginUser).length !== 0;

  return (
    <NavigationContainer linking={linking}>
      {logged ? (
        <HomeStack />
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default App;
