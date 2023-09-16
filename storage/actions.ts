import { getUsers, logoutUser, setLoggedInUser } from "./initialState"
export const LoginResponse = {
    Success: 0,
    Error: 1
}
export const loginUser = async (username, password) => {
    const users = await getUsers();
    const idx = users.findIndex(user => user.username === username && user.password === password)
    return await setLoggedInUser(users[idx]) ? LoginResponse.Success : LoginResponse.Error;
}
export const logout = async (navigation) => {
    navigation.navigate('Login');
    await logoutUser()
}