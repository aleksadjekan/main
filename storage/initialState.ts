import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Notification,
  NotificationMessage,
  User,
  UserType,
  Dogadjaji,
  Animal,
  Komenatar,
  Paket,
  Order,
} from "./types";

const animals: Animal[] = [
  {
    id: "1",
    url: require("../assets/images/koala.jpeg"),
    title: "Koala",
    description:
      "Koala, koji je autohton u Australiji, poznat je po svom krznu i ljubavi prema lišću eukaliptusa. Često se naziva 'koala medo', ali u stvarnosti nije medo, već torbar.",
  },
  {
    id: "2",
    url: require("../assets/images/lion.jpeg"),
    title: "Lav",
    description:
      "Lav je divlji sisavac poznat po svojoj snazi i hrabrosti. Lavovi žive u čoporima i često su simbol moći u mnogim kulturama.",
  },
  {
    id: "3",
    url: require("../assets/images/panda.jpeg"),
    title: "Panda",
    description:
      "Panda, koja je domaća u Kini, prepoznatljiva je po svojim crno-belim bojama i opuštenom načinu života. Ona je biljojed i posebno voli bambus.",
  },
  {
    id: "4",
    url: require("../assets/images/slon.jpeg"),
    title: "Slon",
    description:
      "Slon je najveći kopneni sisavac na svetu. Poznat je po svojoj veličini i dugom nosu, koji nazivamo surla. Slonovi su poznati po inteligenciji i socijalnom ponašanju.",
  },
  {
    id: "5",
    url: require("../assets/images/zirafa.jpeg"),
    title: "Žirafa",
    description:
      "Žirafa je najviša kopnena životinja na svetu. Ima dugačak vrat i karakteristične mrlje na koži. Žirafe su biljojedi i često pasu lišće sa vrhova drveća.",
  },
  {
    id: "6",
    url: require("../assets/images/bear.jpeg"),
    title: "Medved",
    description:
      "Medved je divlji sisavac poznat po svom krznu i snažnim šapama. Postoji nekoliko vrsta medveda širom sveta, uključujući smeđe medvede i polarne medvede.",
  },
  {
    id: "7",
    url: require("../assets/images/hipo.jpeg"),
    title: "Hipopotam",
    description:
      "Hipopotam je velika vodena životinja koja je poznata po svojoj masivnoj građi i velikim ustima. Iako deluju sporo na kopnu, hipopotami su brzi plivači.",
  },
  {
    id: "8",
    url: require("../assets/images/gorila.jpeg"),
    title: "Gorila",
    description:
      "Gorila je veliki majmun koji živi u Africi. Mužjaci imaju karakteristične srebrne leđa. Gorile su blisko povezane sa ljudima i dele mnoge genetske sličnosti.",
  },
  {
    id: "9",
    url: require("../assets/images/zebra.jpeg"),
    title: "Zebra",
    description:
      "Zebra je afrički kopneni sisavac poznat po svojim crno-belim prugama. One često žive u stadima i često su viđene na afričkim savanama.",
  },
  {
    id: "10",
    url: require("../assets/images/snake.jpeg"),
    title: "Zmija",
    description:
      "Zmija je vodozemac bez nogu. Postoji mnogo različitih vrsta zmija širom sveta, od kojih su neke otrovne, dok su druge bezopasne.",
  },
  {
    id: "11",
    url: require("../assets/images/turtle.jpeg"),
    title: "Kornjača",
    description:
      "Kornjača je vodozemac sa tvrdim oklopom koji štiti njen unutrašnji deo tela. Kornjače često žive u vodi, ali postoje i kopnene vrste.",
  },
];
const paketi = [
  {
    name: "Porodična avantura",
    description:
      "Uživajte u danu punom zabave za celu porodicu. Ovaj paket uključuje ulaznice za 2 odrasle osobe i 2 dece, kao i besplatno korišćenje vožnje vozićem unutar zoo vrta.",
    price: 80,
    imageSrc: require("../assets/images/family.jpg"),
  },
  {
    name: "Romantična šetnja",
    description:
      "Provedite nezaboravan dan sa svojim partnerom u našem prelepom zoo vrtu. Ovaj paket uključuje ulaznice za 2 odrasle osobe, romantičnu kočiju vožnju kroz zoo vrt, i piknik korpu sa grickalicama i vinom.",
    price: 120,
    imageSrc: require("../assets/images/romantic.jpeg"),
  },
  {
    name: "Školsko polje",
    description:
      "Otvorite svet prirode za vaše učenike. Ovaj paket nudi ulaznice za 30 dece i 3 nastavnika, kao i edukativnu turu kroz zoo vrt sa našim stručnim vodičem.",
    price: 200,
    imageSrc: require("../assets/images/school1.jpeg"),
  },
  // {
  //   name: "Rođendanska zabava",
  //   description:
  //     "Proslavite rođendan svog deteta u našem zoo vrtu. Ovaj paket uključuje ulaznice za 10 dece i 2 odrasle osobe, kao i rođendansku tortu i balone.",
  //   price: 150,
  //   imageSrc: require("../assets/images/zebra.jpeg"),
  // },
];

const user1: User = {
  firstName: "John",
  lastName: "Doe",
  phone: "1234567890",
  address: "123 Main Street",
  username: "aca",
  password: "faca",
  userType: UserType.Visitor,
};
const user2: User = {
  firstName: "Jane",
  lastName: "Smith",
  phone: "9876543210",
  address: "456 Elm Street",
  username: "janesmith",
  password: "jane123",
  userType: UserType.Visitor,
};

const user3: User = {
  firstName: "Bob",
  lastName: "Johnson",
  phone: "5551234567",
  address: "789 Oak Avenue",
  username: "bobjohnson",
  password: "bob123",
  userType: UserType.Visitor,
};

const user4: User = {
  firstName: "Sarah",
  lastName: "Miller",
  phone: "9998887776",
  address: "321 Maple Avenue",
  username: "sarah",
  password: "sarah123",
  userType: UserType.Employee,
};
const notification1: Notification = {
  username: "aca",
  description: "Dobro dosli na platformu Zoo Panda",
  read: true,
  id: 0,
};
const event1: Dogadjaji = {
  name: "Predstava Hranjenja Životinja",
  description:
    "Pridružite nam se na uzbudljivoj predstavi hranjenja životinja gde možete naučiti o ishrani različitih životinja u našem zoološkom vrtu. Približite se i lično se upoznajte sa našim stručnim čuvarima zoološkog vrta dok hrane i interaguju sa životinjama.",
  imageSrc: require("../assets/images/zoo1.jpeg"),
  num_likes: 4,
};
const event2: Dogadjaji = {
  name: "Safari Avantura Tura",
  description:
    "Krenite na uzbudljivu safari avanturu kroz našu rezervaciju divljine. Posmatrajte veličanstvenost lava, zebri i žirafa u njihovom prirodnom staništu. Naši obučeni vodiči pružiće fascinantne uvide u ponašanje životinja.",
  imageSrc: require("../assets/images/zoo2.jpeg"),
  num_likes: 23,
};
const event3: Dogadjaji = {
  name: "Razgovori Sa Čuvarima Životinja",
  description:
    "Prisustvujte našim informativnim razgovorima sa čuvarima zoološkog vrta kako biste dublje razumeli naše stanovnike životinjskog sveta. Naši strastveni čuvari podeliće svoje znanje i priče o životinjama kojima se brinu.",
  imageSrc: require("../assets/images/zoo6.jpeg"),
  num_likes: 34,
};
const event4: Dogadjaji = {
  name: "Ekspedicija Za Posmatranje Ptica",
  description:
    "Istražite čuda sveta ptica u našem zoološkom vrtu tokom vođene ekspedicije za posmatranje ptica. Otkrijte raznolikost šarenih i egzotičnih vrsta ptica dok saznajete o njihovim jedinstvenim ponašanjima i staništima.",
  imageSrc: require("../assets/images/zoo3.jpeg"),
  num_likes: 412,
};
const event5: Dogadjaji = {
  name: "Radionica Za Obogaćivanje Života Životinja",
  description:
    "Učestvujte u našoj radionici za obogaćivanje života životinja gde možete pomoći u kreiranju igračaka i aktivnosti koje će održavati mentalno i fizički stimulisane naše životinje. Naučite o važnosti obogaćivanja u brizi o životinjama.",
  imageSrc: require("../assets/images/zoo4.jpeg"),
  num_likes: 224,
};
const event6: Dogadjaji = {
  name: "Noćno Posmatranje Noćnih Stvorenja",
  description:
    "Doživite čaroliju zoološkog vrta tokom noći tokom naše Noćne Avanture Noćnih Stvorenja. Istražite noćno ponašanje životinja poput sova, slepih miševa i noćnih sisavaca. Ponesite baterijsku lampu i budite spremni za jedinstvenu avanturu.",
  imageSrc: require("../assets/images/zoo5.jpeg"),
  num_likes: 41,
};
const comments: Komenatar[] = [
  {
    animal_id: "2",
    username: "aca",
    description: "Divna slika koale! Obožavam ih!",
  },
  {
    animal_id: "2",
    username: "janesmith",
    description: "Lavovi su kraljevi divljine. Impresivni su!",
  },
];

const users = [user1, user2, user3, user4];
const notifications = [notification1];
const events = [event1, event2, event3, event4, event5, event6];
const orders = [];

export const initalLocalStorage = () => {
  AsyncStorage.setItem("users", JSON.stringify(users));
  AsyncStorage.setItem("notifications", JSON.stringify(notifications));
  AsyncStorage.setItem("events", JSON.stringify(events));
  AsyncStorage.setItem("animals", JSON.stringify(animals));
  AsyncStorage.setItem("comments", JSON.stringify(comments));
  AsyncStorage.setItem("paketi", JSON.stringify(paketi));
  AsyncStorage.setItem("orders", JSON.stringify(orders));
};
export const getUsers = async (): Promise<User[]> => {
  const users = await AsyncStorage.getItem("users");
  return users ? (JSON.parse(users) as User[]) : [];
};

export const getNotifications = async (): Promise<Notification[]> => {
  const notifications = await AsyncStorage.getItem("notifications");
  return notifications ? (JSON.parse(notifications) as Notification[]) : [];
};
export const getEvents = async (): Promise<Dogadjaji[]> => {
  const events = await AsyncStorage.getItem("events");
  return events ? (JSON.parse(events) as Dogadjaji[]) : [];
};
export const getAnimals = async (): Promise<Animal[]> => {
  const animals = await AsyncStorage.getItem("animals");
  return events ? (JSON.parse(animals) as Animal[]) : [];
};
export const getSelectedAnimal = async (): Promise<Animal> => {
  const animal = await AsyncStorage.getItem("selectedAnimal");
  return animal ? (JSON.parse(animal) as Animal) : null;
};
export const getComments = async (): Promise<Komenatar[]> => {
  const comments = await AsyncStorage.getItem("comments");
  return comments ? (JSON.parse(comments) as Komenatar[]) : null;
};
export const getPaketi = async (): Promise<Paket[]> => {
  const paketi = await AsyncStorage.getItem("paketi");
  return paketi ? (JSON.parse(paketi) as Paket[]) : null;
};
export const getOrders = async (): Promise<Order[]> => {
  const orders = await AsyncStorage.getItem("orders");
  return orders ? (JSON.parse(orders) as Order[]) : null;
};

export const getUserByUsername = async (
  username: string
): Promise<User | undefined> => {
  const users = await AsyncStorage.getItem("users");
  const usersParsed = JSON.parse(users) as User[];
  return usersParsed.find((u) => u.username === username);
};

export const getLoggedInUser = async (): Promise<User> => {
  const user = await AsyncStorage.getItem("loginUser");
  return JSON.parse(user) as User;
};

export const setLoggedInUser = async (user: User): Promise<boolean> => {
  // const userContext = React.useContext(UserContext);
  if (typeof user !== "undefined") {
    await AsyncStorage.setItem("loginUser", JSON.stringify(user));
    // userContext.setLoginUser(user);
    return true;
  } else return false;
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem("loginUser");
};

export const updateUser = async (user: User) => {
  const users = await AsyncStorage.getItem("users");
  const usersParsed = JSON.parse(users) as User[];
  const idx = usersParsed.findIndex((u) => u.username === user.username);
  if (idx !== -1) {
    usersParsed[idx] = user;
    await AsyncStorage.setItem("users", JSON.stringify(usersParsed));
  }
};
