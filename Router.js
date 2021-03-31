/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';


import Splash from './src/Screens/Splash'
import DrawerMenu from './src/Navigation/Drawer/DrawerMenu'

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Root>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle="dark-content"
                />
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Splash" >
                        <Stack.Screen name="Splash" component={Splash} options={{ title: 'Otp', headerShown: false }} />
                        <Stack.Screen name="DrawerMenu" component={DrawerMenu} options={{ title: 'DrawerMenu', headerShown: false }} />

                    </Stack.Navigator>
                </NavigationContainer>
            </Root>
        );
    }
}
export default Router;
