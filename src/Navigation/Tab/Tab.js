import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Colors from '../../component/Style/Colors';
import Home from '../../Screens/TabScreens/Home';
import Likes from '../../Screens/TabScreens/Likes';
import Profile from '../../Screens/TabScreens/Profile';
import Streaming from '../../Screens/TabScreens/Streaming';
// import More from '../Screens/TabScreens/More';

import { Tab } from 'native-base';

const Tabnav = createBottomTabNavigator();
const Dashboardstack = createStackNavigator();

const DashboardStackScreen = () => (
    <Dashboardstack.Navigator headerMode={false}>
        <Dashboardstack.Screen name="Home" component={Home} />
        {/* <Dashboardstack.Screen name="Listing" component={Listing} /> */}
    </Dashboardstack.Navigator>
);

const ProfileStackScreen = () => (
    <Dashboardstack.Navigator headerMode={false}>
        <Dashboardstack.Screen name="Profile" component={Profile} />

        {/* <Dashboardstack.Screen name="Listing" component={Listing} /> */}
    </Dashboardstack.Navigator>
);
function tab(props) {
    // console.log("abd", props)
    // var data = props.cartList;
    // function updateTotalItem() {
    //     let val = 0;
    //     data.map((item) => {
    //         val = val + item.numberOfItem
    //     })
    //     return val;
    // }
    return (
        <Tabnav.Navigator
            initialRouteName={'Home'}
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: '#9c9687',
                labelPosition: 'below-icon',
                pressColor: 'blue',
                showLabel: false,
                style: {
                    height: 50,
                    backgroundColor: Colors.white
                },
                labelStyle: {
                    textAlign: 'center',
                    fontSize: 14,
                    paddingBottom: 5,
                    fontFamily: 'Roboto-Regular'
                },
            }}>
            <Tabnav.Screen
                name="Home"
                component={DashboardStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={33} />
                    ),
                }} />
            <Tabnav.Screen
                name="Likes"
                component={Likes}
                options={{
                    tabBarLabel: 'Likes',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-search-outline" color={color} size={33} />
                    ),
                }}
            />
            <Tabnav.Screen
                name="Streaming"
                component={Streaming}
                options={{
                    tabBarLabel: 'Streaming',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-notifications-circle-outline" color={color} size={33} />
                    ),
                }}
            />
            <Tabnav.Screen
                name="profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user-circle-o" color={color} size={26} />
                    ),
                }}
            />
        </Tabnav.Navigator>
    );
}



const styles = StyleSheet.create({
    logoImg: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: '10%',
    },
    headerTxt: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 22,
        marginTop: 20,
    },
    touchbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    }
});

const mapStateToProps = ({ cart_reducer }) => {
    const {
        cartList
    } = cart_reducer;
    return {
        cartList
    };
};
export default connect(mapStateToProps, {})(tab);