import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { UserContext } from '../storage/dataContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut'


const LogoutHeader = ({ navigation }) => {
    const userContext = React.useContext(UserContext);
    const handleLogout = async () => {
        await userContext.logoutAction();
        navigation.navigate('HomePage');
    };

    return (
        <TouchableOpacity style={styles.header} onPress={handleLogout}>
            <Text style={styles.logoutText}>
                <FontAwesomeIcon icon={faSignOut} /> Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    header: {
        marginRight: 15,
    },
    logoutText: {
        fontSize: 16,
        display: 'flex',
        alignItems: 'center'
    },
});

export default LogoutHeader;