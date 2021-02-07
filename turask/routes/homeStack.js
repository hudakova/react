import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import Login from '../screens/login';
import Choose from '../screens/choose';
import About from '../screens/about';
import Map from '../screens/map';

//import { Left } from 'native-base';



const screens = {

    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
               headerShown: false,
            }
        }
    },

    Choose: {
        screen: Choose,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: false,
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
    Home: {                          
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Hiking places"/>,
                //headerLeft: null,
                
            }
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions: {
            title:"Hiking places" ,
        }
    },
   

    Map:{
        screen: Map,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Map"/>,
                //headerLeft: null,
            }
        }
    },

    About:{
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Where to go'/>,
                //headerLeft: null,
            }
        }
    },

    
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#47C799', height: 80},
    }
});

export default HomeStack;