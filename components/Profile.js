import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../storage/dataContext';

const Profile = () => {
    const userContext = React.useContext(UserContext);

    const [username, setUsername] = useState(userContext.loginUser.username);
    const [firstName, setFirstName] = useState(userContext.loginUser.firstName);
    const [lastName, setLastName] = useState(userContext.loginUser.lastName);
    const [phone, setPhone] = useState(userContext.loginUser.phone);
    const [address, setAddress] = useState(userContext.loginUser.address);

    const handleUpdateProfile = async () => {
        const user = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            password: userContext.loginUser.password,
            userType: userContext.loginUser.userType
        }
        await userContext.updateUser(user, userContext.users);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                    multiline
                />

                <View style={styles.buttonWrapper}>
                    <Button title="Update Profile" onPress={handleUpdateProfile} style={styles.button} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        display: "flex",
        alignItems: "center",
    },
    card: {
        width: "400px",
    },
    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: "120px"
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        marginTop: 8,
        marginBottom: 16,
    },
});

export default Profile;