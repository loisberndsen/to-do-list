import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class ToDoRow extends React.Component {
    // Makes sure that it links through to the removeItem function when the button is pressed
    buttonPressHandler = () => {
        this.props.removeItem(this.props.id);
    };

    render() {
        return (
            // List item
            <TouchableOpacity
                style={styles.listItem}
                onPress={this.buttonPressHandler}
            >
                <Text>{this.props.title}</Text>
                <Text style={styles.emoji}>{this.props.emoji}</Text>
            </TouchableOpacity>
        );
    };
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#f6f6f6',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    emoji: {

    }
});