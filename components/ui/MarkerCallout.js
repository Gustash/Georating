import React, { Component } from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps';
import StarRating from 'react-native-star-rating';

class MarkerCallout extends Component {
    render() {
        return (
            <MapView.Callout 
                style={styles.callout}
                onPress={() => this.props.onCalloutPressed()}
            >
                <View>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={30}
                    />
                    <Button
                        title="Click to rate location!"
                        onPress={f => f}
                    />
                </View>
            </MapView.Callout>
        );
    }
}

const styles = StyleSheet.create({
    callout: {
        width: 200
    }
});

export default MarkerCallout;