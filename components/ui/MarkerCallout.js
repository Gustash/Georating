import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import StarRating from 'react-native-star-rating';

class MarkerCallout extends Component {
    render() {
        return (
            <MapView.Callout 
                style={styles.callout}
                onPress={() => this.props.onCalloutPressed()}
            >
                <View style={styles.content}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={30}
                    />
                    <Text>Click to rate location!</Text>
                </View>
            </MapView.Callout>
        );
    }
}

const styles = StyleSheet.create({
    callout: {
        width: 200
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MarkerCallout;