import { Button } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/login';


const screens ={
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return{
                buttonTitle: () => <Button navigation={navigation} title='Turista'/>,
            }
        }
    },
}

const LoginStack = createStackNavigator(screens);

export default LoginStack;
