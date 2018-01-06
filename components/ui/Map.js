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

        if (!coordinate)
            return;

        const marker = {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            rating: 0
        };
        this.setState({
            markers: [
                ...this.state.markers,
                marker
            ]
        });
    }

    navigateToRate(latitude, longitude) {
        this.props.navigation.navigate('Rating', { 
            latitude, 
            longitude, 
            onRatingChanged: (latitude, longitude, rating) => this.ratingChanged(latitude, longitude, rating) });
    }

    ratingChanged(latitude, longitude, rating) {
        let marker = this.state.markers.find(marker => 
            marker.latitude === latitude && marker.longitude === longitude);

        const oldRating = marker.rating;

        if (!marker)
            return;
        
        marker.rating = rating;

        let markers = this.state.markers.filter(marker => 
            marker.latitude !== latitude || marker.longitude !== longitude);
        markers.push(marker);

        console.log(JSON.stringify(markers));

        this.setState({
            markers
        });
    }

    render() {
        const { state } = this.props.navigation;
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
                        rating={marker.rating}
                        onNavigation={(latitude, longitude) => this.navigateToRate(latitude, longitude)}
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