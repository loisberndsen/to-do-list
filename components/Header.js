import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            {/* Show the header title that's defined in App.js */}
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#00d49f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 26,
        fontFamily: 'bebas-neue',
        letterSpacing: 2
    }
});

export default Header;