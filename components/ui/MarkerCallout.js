import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps';

class MarkerCallout extends Component {
    render() {
        return (
            <MapView.Callout 
                style={styles.callout}
                onPress={() => Alert.alert("This will do stuff")}
            >
                <View>
                    <Text>This is totally incomplete lol</Text>
                </View>
            </MapView.Callout>
        );
    }
}

const styles = StyleSheet.create({
    callout: {
        width: 100
    }, 
});

export default MarkerCallout;