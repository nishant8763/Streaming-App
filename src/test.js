import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    Animated, SafeAreaView,
    Dimensions,
    TextInput, Easing
} from 'react-native';
import { Container, Content } from 'native-base';
// import BackHeader from '../../../../component/HeaderComponent/BackHeader'
const { height } = Dimensions.get('window')
class test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coverHeight: new Animated.Value(height - 100),
            formOpacity: new Animated.Value(0),
            loader: false,
        };
    }

    login = () => {
        this.setState({
            loader: true
        });
        Animated.timing(this.state.coverHeight, {
            toValue: height / 3,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.cubic
        }).start(() => {
            Animated.timing(this.state.formOpacity, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false
            }).start();
        });
    }

    render() {
        const { coverHeight, formOpacity, loader } = this.state;
        return (

            <SafeAreaView style={{ flex: 1 }}>
                {/* <BackHeader navigation={this.props.navigation} title={'Plans'} /> */}
                <Animated.View style={{ backgroundColor: '#66b2ff', height: coverHeight, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, textAlign: 'center', color: '#fff' }}>HI welcome to Æuctiontech</Text>
                    {loader === false ? (
                        <TouchableOpacity style={{ position: 'absolute', bottom: 30, alignSelf: 'center' }} onPress={this.login}>
                            <Text style={{ textAlign: 'center', fontSize: 20, }}>click Login</Text>
                        </TouchableOpacity>
                    ) : (null)}

                </Animated.View>
                <Animated.View style={{ flex: 1, backgroundColor: '#000', padding: 25 }}>
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }} >Login to your acount</Text>
                    <Animated.View style={{ opacity: formOpacity }}>
                        <TextInput
                            placeholder="name"
                            placeholderTextColor='#fff'
                            style={{
                                margin: 10,
                                padding: 10,
                                backgroundColor: 'red',
                                borderRadius: 5,
                                color: '#fff'
                            }}
                        />
                        <TextInput
                            placeholder="name"
                            placeholderTextColor='#fff'
                            style={{
                                margin: 10,
                                padding: 10,
                                backgroundColor: 'red',
                                borderRadius: 5,
                                color: '#fff'
                            }}
                        />
                        <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, margin: 10 }}>
                            <Text style={{ textAlign: 'center', fontSize: 20 }}>submit</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </SafeAreaView>
        );
    }
}

export default test;

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
