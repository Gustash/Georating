import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { Location, Permissions } from 'expo';

import Marker from './Marker';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                // San Francisco
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            errorMessage: "",
            markers: []
        };
    }

    componentWillMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async() => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
        this.setState({
            errorMessage: 'Permission to access location was denied',
        });
        }

        let location = await Location.getCurrentPositionAsync({});
        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };

        this.setState({ region });
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    onMapPress(e) {
        const { coordinate } = e.nativeEvent;
        if (coordinate) {
            this.setState({
                markers: [
                    ...this.state.markers,
                    coordinate
                ]
            });
        }
    }

    navigateToRate() {
        this.props.navigation.navigate('Example');
    }

    render() {
        return (
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={this.state.region}
                onRegionChangeComplete={this.onRegionChange.bind(this)}
                onPress={this.onMapPress.bind(this)}
            >
                {this.state.markers.map((marker, i) =>
                    <Marker
                        key={i}
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                        onNavigation={() => this.navigateToRate()}
                    />
                )}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
});

export default Map;