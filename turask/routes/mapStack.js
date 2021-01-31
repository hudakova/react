import {createStackNavigator} from 'react-navigation-stack';
import Header from '../shared/header';
import React from 'react';
import Map from '../screens/map';


const screens = {
    Map:{                          //nemusi sa to volat home moze hocijak
        screen: Map,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Map'/>,
            }
        }
    }, 
}

const MapStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#686868', height: 80}
    }
});

export default MapStack;