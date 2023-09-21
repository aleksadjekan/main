import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Notification,
  NotificationMessage,
  User,
  UserType,
  Dogadjaji,
} from "./types";

import koala from "../assets/images/koala.jpeg";

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
  username: "sarahmiller",
  password: "sarah123",
  userType: UserType.Employee,
};
const notification1: Notification = {
  username: "aca",
  notificationType: NotificationMessage.Welcome,
  read: false,
  id: 1,
};
const notification2: Notification = {
  username: "aca",
  notificationType: NotificationMessage.Decline,
  read: true,
  id: 0,
};
const event1: Dogadjaji = {
  name: "Predstava Hranjenja Životinja",
  description:
    "Pridružite nam se na uzbudljivoj predstavi hranjenja životinja gde možete naučiti o ishrani različitih životinja u našem zoološkom vrtu. Približite se i lično se upoznajte sa našim stručnim čuvarima zoološkog vrta dok hrane i interaguju sa životinjama.",
  image_src: koala,
};
const event2: Dogadjaji = {
  name: "Safari Avantura Tura",
  description:
    "Krenite na uzbudljivu safari avanturu kroz našu rezervaciju divljine. Posmatrajte veličanstvenost lava, zebri i žirafa u njihovom prirodnom staništu. Naši obučeni vodiči pružiće fascinantne uvide u ponašanje životinja.",
  image_src: koala,
};
const event3: Dogadjaji = {
  name: "Razgovori Sa Čuvarima Životinja",
  description:
    "Prisustvujte našim informativnim razgovorima sa čuvarima zoološkog vrta kako biste dublje razumeli naše stanovnike životinjskog sveta. Naši strastveni čuvari podeliće svoje znanje i priče o životinjama kojima se brinu.",
  image_src: koala,
};
const event4: Dogadjaji = {
  name: "Ekspedicija Za Posmatranje Ptica",
  description:
    "Istražite čuda sveta ptica u našem zoološkom vrtu tokom vođene ekspedicije za posmatranje ptica. Otkrijte raznolikost šarenih i egzotičnih vrsta ptica dok saznajete o njihovim jedinstvenim ponašanjima i staništima.",
  image_src: koala,
};
const event5: Dogadjaji = {
  name: "Radionica Za Obogaćivanje Života Životinja",
  description:
    "Učestvujte u našoj radionici za obogaćivanje života životinja gde možete pomoći u kreiranju igračaka i aktivnosti koje će održavati mentalno i fizički stimulisane naše životinje. Naučite o važnosti obogaćivanja u brizi o životinjama.",
  image_src: koala,
};
const event6: Dogadjaji = {
  name: "Noćno Posmatranje Noćnih Stvorenja",
  description:
    "Doživite čaroliju zoološkog vrta tokom noći tokom naše Noćne Avanture Noćnih Stvorenja. Istražite noćno ponašanje životinja poput sova, slepih miševa i noćnih sisavaca. Ponesite baterijsku lampu i budite spremni za jedinstvenu avanturu.",
  image_src: koala,
};

const users = [user1, user2, user3, user4];
const notifications = [notification1, notification2];
const events = [event1, event2, event3, event4, event5, event6];

export const initalLocalStorage = () => {
  AsyncStorage.setItem("users", JSON.stringify(users));
  AsyncStorage.setItem("notifications", JSON.stringify(notifications));
  AsyncStorage.setItem("events", JSON.stringify(events));
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
