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
    localStorage.setItem('users', JSON.stringify(users))
}
export const getUsers = (): User[] => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) as User[] : []
}

