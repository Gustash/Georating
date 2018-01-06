import React, { Component } from 'react';
import MapView from 'react-native-maps';
import MarkerCallout from './MarkerCallout';

class Marker extends Component {
    calloutPressed() {
        this.props.onNavigation(this.props.latitude, this.props.longitude);
    }

    render() {
        return (
            <MapView.Marker draggable
                coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
                title="I am a marker"
                description="I was marked"
            >
                <MarkerCallout 
                    rating={this.props.rating}
                    onCalloutPressed={() => this.calloutPressed()}
                />
            </MapView.Marker>
        );
    }
}

export default Marker;