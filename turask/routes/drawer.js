import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import MapStack from './mapStack';
import { StyleSheet, View, Text,  TouchableOpacity} from 'react-native';


const RootDrawerNavigator = createDrawerNavigator({

    Home:{
        screen: HomeStack,

    },
    About:{
        screen: AboutStack,
    },
    Map:{
        screen: MapStack,
    },
    
}) ;

    
export default createAppContainer(RootDrawerNavigator);

