import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ToDoRow from '../components/ToDoRow'

export default class ToDoTable extends React.Component {
    render() {
        // Map grabs the array and loops over each of the items/index and transforms all of them to a ToDoRow
        const items = this.props.items.map((item, index) => <ToDoRow
            title={item.title} // Is whatever you put into the text input and see in the list
            emoji={item.emoji}
            key={index} // So the program can keep track of whatever's in the list
            id={index} // So each item has a unique name so they can be removed individually
            removeItem={this.props.removeItem}
        />);

        return (
            <View style={styles.toDoTable}>
                {/* If there are more items than the page is long this makes sure it can scroll */}
                <ScrollView/>
                {items}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toDoTable: {
        backgroundColor: '#FFFFFF',
        marginBottom: 10
    }
});