import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import UserContext from "../storage/dataContext";
import { OrderStatus } from "../storage/types";

const OrderList = ({ orders }) => {
  const userContext = React.useContext(UserContext);
  const changeStatusOrder = async (id, status) => {
    console.log(id);
    console.log(status);
    await userContext.changeStatusOrder(id, status);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.description}>{item.description}</Text>
            {item.orderStatus === OrderStatus.NOT_ANSWERED && (
              <>
                <TouchableOpacity
                  style={styles.firstReadButton}
                  onPress={() =>
                    changeStatusOrder(item.orderId, OrderStatus.CONFIRMED)
                  }
                >
                  <Text style={styles.readLabel}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readButton}
                  onPress={() =>
                    changeStatusOrder(item.orderId, OrderStatus.DECLINED)
                  }
                >
                  <Text style={styles.readLabel}>Decline</Text>
                </TouchableOpacity>
              </>
            )}
            {item.orderStatus !== OrderStatus.NOT_ANSWERED && (
              <Text style={styles.readLabel}>{item.orderStatus}</Text>
            )}
          </View>
        )}
        keyExtractor={(item) => item.orderId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notification: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    minWidth: 500,
  },
  description: {
    maxWidth: 400,
  },
  readButton: {
    backgroundColor: "#19ABFF",
    borderRadius: 5,
    padding: 5,
  },
  firstReadButton: {
    backgroundColor: "#19ABFF",
    borderRadius: 5,
    padding: 5,
    marginLeft: "auto",
  },
  readLabel: {
    marginLeft: "auto",
  },
  timestamp: {
    color: "#888888",
    marginTop: 5,
  },
});

export default OrderList;
