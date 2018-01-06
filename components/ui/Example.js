import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Example extends Component {
    render() {
        const { state } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>Latitude: {state.params.latitude}</Text>
                <Text>Longitude: {state.params.longitude}</Text>
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