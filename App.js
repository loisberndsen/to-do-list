import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import * as Font from 'expo-font';

import Header from './components/Header';
import ToDoTable from './components/ToDoTable';
import InputContainer from './components/InputContainer';
import EmojiSelector from "react-native-emoji-selector";

export default class App extends React.Component {
    state = {
        fontsLoaded: false, // Check if font is loaded before render
        items: [], // The array for your to do list items
        emojiPickerOpen: false,
        emoji: "☺️",
    };

    // Can't use await without async
    async componentDidMount() { // Code that has to be executed after render
        await Font.loadAsync({ // await indicates that, before state can be changed, the font needs to be loaded
            'bebas-neue': require('./assets/fonts/BebasNeue-Regular.ttf')
        });
        this.setState({fontsLoaded: true}); // Set state to true when font is loaded after render
    };

    // Function to add item to to do list
    addItem = (item) => {
        const newItems = this.state.items;
        newItems.push(item);
        this.setState({
            items: newItems
        })
    };

    // Function to remove item from to do list
    removeItem = (indexOfItemToRemove) => {
        const newItems = this.state.items;
        newItems.splice(indexOfItemToRemove, 1);
        this.setState({
            items: newItems
        })
    };

    // Function to open or close emoji picker
    toggleEmojiPicker = () => {
        this.setState({
            emojiPickerOpen: !this.state.emojiPickerOpen
        });
    };

    render() {
        if (this.state.fontsLoaded) { // If font loaded, load the app as normal
            return (
                <View style={styles.screen}>
                    <View style={styles.header}>
                        <Header title="My To Do List"/>
                    </View>
                    <InputContainer addItem={this.addItem} toggleEmojiPicker={this.toggleEmojiPicker} currentEmoji={this.state.emoji}/>
                    <ScrollView style={styles.scrollView}>
                        {
                            this.state.emojiPickerOpen ? <EmojiSelector
                                style={styles.emojiPicker}
                                onEmojiSelected={emoji => {
                                    this.setState({emoji: emoji}); // Change to chosen emoji
                                    this.toggleEmojiPicker();
                                }}
                                showSearchBar={false}
                            /> : null
                        }
                        <ToDoTable items={this.state.items} removeItem={this.removeItem}/>
                    </ScrollView>
                </View>
            );
        } else { // If font hasn't loaded, return basic text
            return <Text>Hello World!</Text>
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    scrollView: {
        height: '70%',
    },
    emojiPicker: {
        marginTop: 5,
        height: '75%'
    }
});