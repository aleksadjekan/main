export type User = {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    username: string;
    password: string;
    userType: UserType;
}

export enum UserType {
    Visitor,
    Employee
}