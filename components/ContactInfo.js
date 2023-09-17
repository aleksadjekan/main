import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactInfoPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Contact Information</Text>
                <View style={styles.contactInfo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.info}>panda_zoo@gmail.com</Text>
                </View>
                <View style={styles.contactInfo}>
                    <Text style={styles.label}>Phone:</Text>
                    <Text style={styles.info}>+381 65 2526-446</Text>
                </View>
                <View style={styles.contactInfo}>
                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.info}>Mladena Mitrica 2a</Text>
                    <Text style={styles.info}>Serbia, 11000 Belgrade</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "300px",
    },
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contactInfo: {
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
    },
});

export default ContactInfoPage;