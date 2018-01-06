import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import { NavigationActions } from 'react-navigation';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        }
    }

    changeRating(rating) {
        this.setState({
            rating
        });
    }

    postRating() {
        const { navigation } = this.props;
        const { state } = navigation;
        navigation.goBack();
        state.params.onRatingChanged(state.params.latitude, state.params.longitude, this.state.rating);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Click stars to select rating</Text>
                <StarRating
                    maxStars={5}
                    rating={this.state.rating}
                    starSize={35}
                    selectedStar={(rating) => this.changeRating(rating)}
                />
                <Button
                    title="Rate"
                    onPress={() => this.postRating()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
});

export default Rating;