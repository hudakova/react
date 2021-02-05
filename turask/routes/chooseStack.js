import { Button } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Choose from '../screens/choose';

const screens ={
    Choose: {
        screen: Choose,
        navigationOptions: ({ navigation }) => {
            return{
                buttonTitle: () => <Button navigation={navigation} title='planner'/>,
            }
        }
    },
}

const ChooseStack = createStackNavigator(screens);

export default ChooseStack;