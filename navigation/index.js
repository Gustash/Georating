import { StackNavigator } from 'react-navigation';

import Map from '../components/ui/Map';
import Rating from '../components/ui/Rating';

import { Platform } from 'react-native';

import { Constants } from 'expo';

// register all screens of the app (including internal ones)
export default Stack = StackNavigator({
    Map: {
        screen: Map,
        navigationOptions: {
            header: null
        }
    },
    Rating: {
        screen: Rating,
        navigationOptions: {
            title: 'Rate Location',
            headerStyle: { marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0 }
        }
    },
});