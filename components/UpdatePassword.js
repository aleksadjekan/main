import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../storage/dataContext';

const UpdatePassword = () => {
    const userContext = React.useContext(UserContext);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const handleUpdateProfile = async () => {
        if (oldPassword === userContext.loginUser.password && newPassword === repeatNewPassword) {
            const user = {
                username: userContext.loginUser.username,
                firstName: userContext.loginUser.firstName,
                lastName: userContext.loginUser.lastName,
                phone: userContext.loginUser.phone,
                address: userContext.loginUser.address,
                password: userContext.loginUser.password,
                userType: userContext.loginUser.userType,
                password: newPassword
            }

            await userContext.updateUser(user, userContext.users);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Old Password</Text>
                <TextInput
                    style={styles.input}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                    secureTextEntry
                />
                <Text style={styles.label}>New Password</Text>
                <TextInput
                    style={styles.input}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                />
                <Text style={styles.label}>Repeat Password</Text>
                <TextInput
                    style={styles.input}
                    value={repeatNewPassword}
                    onChangeText={setRepeatNewPassword}
                    secureTextEntry
                />
                <View style={styles.buttonWrapper}>
                    <Button title="Update Password" onPress={handleUpdateProfile} style={styles.button} />
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

export default UpdatePassword;