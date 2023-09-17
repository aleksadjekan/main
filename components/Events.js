import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Events = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                Events
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

export default Events;