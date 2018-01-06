import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Example extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>I am another screen.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Example;