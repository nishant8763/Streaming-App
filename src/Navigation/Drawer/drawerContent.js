import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Icon } from 'native-base';
import Colors from '../../component/Style/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            loader: false,
            A_token: ''
        };
    }
    onLogooutCall = () => {
        Alert.alert(
            'Logout',
            'Are you sure to Logout',
            [
                { text: 'Yes,Logout', onPress: () => this.userLogout() },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
            ],
            { cancelable: false })
    }

    userLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            this.props.navigation.replace('Login', { type: 'Login' })
        }
        catch (exception) {
            console.log('not able to logout');
            return false;
        }

    };
    async componentDidMount() {

        let token = await AsyncStorage.getItem('token');
        let userInfo = await AsyncStorage.getItem('userInfo');
        console.log(token, userInfo)
        this.setState({
            A_token: token
        })

    }
    close = () => {

        this.props.navigation.navigate('My_Book');
        this.props.navigation.closeDrawer()
    }
    // alert(JSON.stringify(global.userDetails))
    render() {

        // console.log("hii", this.props)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary, opacity: 0.8 }} forceInset={{ top: 'always' }}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <DrawerContentScrollView {...this.props} showsVerticalScrollIndicator={false}>
                        <View style={{ width: '85%', marginTop: 5, marginBottom: 5, alignSelf: 'center' }} >
                            <Image source={{ uri: "https://i.pinimg.com/originals/af/09/41/af0941ba06185e9846af909ba9350baf.png" }}
                                style={{
                                    width: 70,
                                    height: 70,
                                    marginTop: 10,
                                    borderRadius: 100,
                                }} />
                        </View>
                        <DrawerItem

                            label={() => <Text style={styles.title} >Restaurant</Text>}
                            onPress={() => this.props.navigation.navigate('Tab')}
                        />
                        <View style={styles.line} />
                        <DrawerItem

                            label={() => <Text style={styles.title}>Fitness</Text>}
                            onPress={() => this.props.navigation.navigate('E_magazine')}
                        />
                        <View style={styles.line} />
                        <DrawerItem

                            label={() => <Text style={styles.title}>Events</Text>}
                            onPress={() => this.props.navigation.navigate('Tab')}
                        />
                        <View style={styles.line} />
                        <DrawerItem

                            label={() => <Text style={styles.title}>Hotels</Text>}
                            onPress={() => this.props.navigation.navigate('Tab')}
                        />
                        <View style={styles.line} />
                        <DrawerItem

                            label={() => <Text style={styles.title}>Real Estate</Text>}
                            onPress={() => this.props.navigation.navigate('Tab')}
                        />
                        <View style={styles.line} />
                        <DrawerItem
                            label={() => <Text style={styles.title}>Business</Text>}
                            onPress={() => this.props.navigation.navigate('Tab')}
                        />
                        <View style={styles.line} />
                        <DrawerItem

                            label={() => <Text style={styles.title}>About</Text>}
                            onPress={() => this.props.navigation.navigate('Tab')}
                        />
                        <View style={styles.line} />
                        <DrawerItem

                            label={() => <Text style={styles.title}>Privacy Policy</Text>}
                            onPress={() => this.props.navigation.navigate('Tab')}
                        />
                        <View style={styles.line} />

                        <DrawerItem

                            label={() => <Text style={{ ...styles.title, color: '#f00' }}>Logout</Text>}
                            onPress={this.onLogooutCall}
                        />
                        <View style={styles.line} />

                    </DrawerContentScrollView>
                </View>
            </SafeAreaView>
        );
    }

}

export default DrawerContent;
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        fontFamily: Colors.font_Regular,
        color: Colors.white,
        marginLeft: 15
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    bottomDrawerSection: {
        marginBottom: 5,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    line: { width: '100%', borderBottomWidth: 1, borderBottomColor: '#cccccc', marginTop: 5, marginBottom: 5, alignSelf: 'center' }
});
