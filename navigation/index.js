import { StackNavigator } from 'react-navigation';

import Map from '../components/ui/Map';
import Example from '../components/ui/Example';

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
    Example: {
        screen: Example,
        navigationOptions: {
            title: 'Example Rate',
            headerStyle: { marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0 }
        }
    }
});