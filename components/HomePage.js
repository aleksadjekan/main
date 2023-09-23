import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import UserContext from "../storage/dataContext";
import React, { useState } from "react";
import alert from "../alert";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";

const promoCode1 = "figma";

const HomePage = () => {
  const userContext = React.useContext(UserContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.promoName}>Promotivni paketi</Text>
        <Paketi paketi={userContext.paketi} />
        <Text style={styles.promoName}>Pojedinacna karte</Text>
        <BasicTicket />
      </View>
    </ScrollView>
  );
};

const Paketi = ({ paketi }) => {
  return paketi.map((item) => (
    <View style={styles.paketi} key={item.name}>
      <View style={styles.wrapper}>
        <Text style={styles.name}>{item.name}</Text>
        <Image
          source={item.imageSrc.toString()}
          style={{ width: 300, height: 200 }}
        />
        <BuyPromotion item={item} />
      </View>
    </View>
  ));
};
const BasicTicket = () => {
  return (
    <View style={styles.paketi}>
      <View style={styles.basicTicketWrapper}>
        <Text style={styles.name}>Pojedinacna karta</Text>
        <Text style={styles.description}>
          Cena pojedincne karte je 20$ po osobi
        </Text>
        <BuyTicket />
      </View>
    </View>
  );
};
const createInfoAboutPromotionOrder = (name, price) =>
  alert(
    "KUPOVINA",
    `Uspesno ste obavili kupovinu paketa ${name}, po ceni ${price}$, naknadno cete dobiti obavestenje da li su vam ulaznice odobrene`,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
const BuyPromotion = ({ item }) => {
  const userContext = React.useContext(UserContext);
  const [promoCode, setPromoCode] = useState("");
  const buyTicket = (item) => {
    const price = promoCode === promoCode1 ? item.price * 0.9 : item.price;
    createInfoAboutPromotionOrder(item.name, price);
    userContext.createPromotionOrder(
      `Korisnik ${userContext.loginUser?.username} zeli da izvrsi kupovinu promotivnog paketa ${item.name}`,
      price,
      userContext.loginUser?.username
    );
    setPromoCode("");
  };
  return (
    <View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.priceWrapper}>
        <Text>Cena : {item.price}$</Text>
        <TouchableOpacity
          style={styles.buyTicket}
          onPress={() => buyTicket(item)}
        >
          <Text style={styles.text}>Kupi kartu</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.promoCode}
        keyboardType="numeric"
        placeholder="Promo kod"
        onChangeText={(text) => setPromoCode(text)}
        value={promoCode}
      />
    </View>
  );
};
const createInfoAboutOrder = (num, price) =>
  alert(
    "KUPOVINA",
    `Uspesno ste obavili proudzbinu ${num} ulaznica, po ceni ${price}$, naknadno cete dobiti obavestenje da li su vam ulaznice odobrene`,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
const BuyTicket = () => {
  const userContext = React.useContext(UserContext);
  const [promoCode, setPromoCode] = useState("");
  const [price, setPrice] = useState(0);
  const [num, setNum] = useState(0);

  const buyTicket = () => {
    const newPrice = promoCode === promoCode1 ? price * 0.9 : price;
    createInfoAboutOrder(num, newPrice);
    userContext.createPromotionOrder(
      `Korisnik ${userContext.loginUser?.username} zeli da izvrsi kupovinu  ${num} pojedinacnih ulaznica`,
      price,
      userContext.loginUser?.username
    );
    setPromoCode("");
    setPrice(0);
    setNum(0);
  };
  const plus = () => {
    setNum(num + 1);
    updatePrice(num + 1);
  };
  const minus = () => {
    if (num > 0) {
      setNum(num - 1);
      updatePrice(num - 1);
    }
  };
  const updatePrice = (br) => {
    setPrice(20 * br);
  };
  return (
    <View>
      <View style={styles.kolicinaWrapper}>
        <Text>Kolicina:</Text>
        <TouchableOpacity style={styles.plusMinus} onPress={() => minus()}>
          <FontAwesomeIcon icon={faMinus} style={styles.icon} />
        </TouchableOpacity>
        <Text>{num}</Text>
        <TouchableOpacity style={styles.plusMinus} onPress={() => plus()}>
          <FontAwesomeIcon icon={faPlus} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.priceWrapper}>
        <Text>Cena : {price}$</Text>
        <TouchableOpacity style={styles.buyTicket} onPress={() => buyTicket()}>
          <Text style={styles.text}>Kupi kartu</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.promoCode}
        placeholder="Promo kod"
        onChangeText={(text) => setPromoCode(text)}
        value={promoCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
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
  paketi: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    flexWrap: "wrap",
  },
  wrapper: {
    paddingBottom: 10,
  },
  name: {
    fontWeight: "bold",
    width: 300,
  },
  promoName: {
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 18,
  },
  description: {
    flex: 3,
    paddingTop: 10,
    maxWidth: 300,
  },
  timestamp: {
    color: "#888888",
    marginTop: 5,
  },
  text: {
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  buyTicket: {
    backgroundColor: "rgb(25, 171, 255)",
    borderRadius: 10,
    padding: 5,
    maxWidth: 80,
  },
  priceWrapper: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    flexDirection: "row",
    width: 300,
  },
  promoCode: {
    marginTop: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    maxWidth: 300,
  },
  kolicina: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  kolicinaWrapper: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  basicTicketWrapper: {
    minWidth: 300,
  },
  icon: {
    height: 10,
    width: 10,
  },
  plusMinus: {
    backgroundColor: "rgb(25, 171, 255)",
    borderRadius: 20,
    padding: 2,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default HomePage;
