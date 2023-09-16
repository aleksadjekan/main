import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, UserType } from "./types";

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
const users = [user1, user2, user3, user4]

export const initalLocalStorage = () => {
    AsyncStorage.setItem('users', JSON.stringify(users))
}
export const getUsers = async (): Promise<User[]> => {
    const users = await AsyncStorage.getItem('users');
    return users ? JSON.parse(users) as User[] : []
}

export const getUserByUsername = async (username: string): Promise<User | undefined> => {
    const users = await AsyncStorage.getItem('users');
    const usersParsed = JSON.parse(users) as User[]
    return usersParsed.find(u => u.username === username);
}


export const getLoggedInUser = async (): Promise<User> => {
    const user = await AsyncStorage.getItem('loginUser');
    return JSON.parse(user) as User;
}

export const setLoggedInUser = async (user: User): Promise<boolean> => {
    if (typeof user !== 'undefined') {
        await AsyncStorage.setItem('loginUser', JSON.stringify(user))
        return true;
    } else return false;
}

export const logoutUser = async () => {
    await AsyncStorage.removeItem('loginUser');
}

export const updateUser = async (user: User) => {
    const users = await AsyncStorage.getItem('users');
    const usersParsed = JSON.parse(users) as User[]
    const idx = usersParsed.findIndex(u => u.username === user.username);
    if (idx !== -1) {
        usersParsed[idx] = user;
        await AsyncStorage.setItem('users', JSON.stringify(usersParsed))
    }
}
