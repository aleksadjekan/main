import { getUsers } from "./initialState"
export enum LoginResponse {
    Success,
    Error
}

export const loginUser = (username: string, password: string): LoginResponse => {
    const users = getUsers();
    const idx = users.findIndex(user => user.username === username && user.password === password)
    if (idx !== -1) {
        localStorage.setItem('loginUser', JSON.stringify(users[idx]))
        return LoginResponse.Success;
    }
    return LoginResponse.Error;
}
export const logout = (navigation) => {
    navigation.navigate('Login');
    localStorage.removeItem('loginUser');

}