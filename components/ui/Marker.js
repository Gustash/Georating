import React, { Component } from 'react';
import MapView from 'react-native-maps';
import MarkerCallout from './MarkerCallout';

class Marker extends Component {
    render() {
        return (
            <MapView.Marker draggable
                coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
                title="I am a marker"
                description="I was marked"
            >
                <MarkerCallout />
            </MapView.Marker>
        );
    }
}

export default Marker;