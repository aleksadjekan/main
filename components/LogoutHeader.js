import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { UserContext } from "../storage/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { useNavigation } from "@react-navigation/native";

const LogoutHeader = () => {
  const navigation = useNavigation();
  const userContext = React.useContext(UserContext);
  const handleLogout = async () => {
    await userContext.logoutAction();
    navigation.navigate("HomePage");
  };
  const goToNotification = () => {
    navigation.navigate("Notification");
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity style={styles.header} onPress={goToNotification}>
        <Text style={styles.logoutText}>
          <FontAwesomeIcon icon={faBell} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.header} onPress={handleLogout}>
        <Text style={styles.logoutText}>
          <FontAwesomeIcon icon={faSignOut} /> Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginRight: 15,
  },
  dropdown: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    display: "flex",
    alignItems: "center",
  },
});

export default LogoutHeader;
