import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';

export default class InputContainer extends React.Component {
    // Text input is empty at the beginning (except for the placeholder)
    state = {text: "", tag: ""};

    // Makes sure that it links through to the addItem function when the button is pressed, empties the text input after
    buttonPressHandler = () => {
        const item = this.state.text;
        const emoji = this.props.currentEmoji;

        // Can't add an empty task
        if (item === "" || item === null) {
            return
        }

        this.props.addItem({title: item, emoji: emoji});
        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <View>
                    <TouchableOpacity style={styles.tagInput} onPress={this.props.toggleEmojiPicker}>
                        <Text>{this.props.currentEmoji}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} color="#00d49f" onPress={this.buttonPressHandler}>
                        <Text style={{color: '#FFFFFF', fontSize: 20, letterSpacing: 3, fontFamily: 'bebas-neue'}}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 0,
        paddingLeft: 80,
        backgroundColor: 'rgba(0,126,95,0.1)'
    },
    input: {
        width: '82%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 5,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    },
    buttonContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        height: 40,
        backgroundColor: '#00d49f',
        width: '70%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagInput: {
        width: '118%',
        height: 40,
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});