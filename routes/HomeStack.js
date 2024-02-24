import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";


const screens = {
    Home: {
        screen: Home
    },

}
const HomeStack = createNativeStackNavigator(screens);

export default createAppContainer(HomeStack)