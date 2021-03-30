import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
    BackHandler,
    Alert, Dimensions,
    Animated,
    TextInput,
    useWindowDimensions
} from 'react-native';
import Colors from '../component/Style/Colors';
const { width, height } = Dimensions.get('screen')
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = (width * .45) * 1.6
let CurrentSlide = 0;
let IntervalTime = 3000;
class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollX: new Animated.Value(0),
            index: 0,
        };
        this.slider = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('DrawerMenu')
        }, 1000)
    }
    render() {
        const { scrollX } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <Image source={{ uri: "https://static.toiimg.com/photo/62506111.cms" }} resizeMode={'cover'} style={{ width: '100%', height: '100%', opacity: 0.4, backgroundColor: '#000' }} />

                <Text style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    top: height / 2,
                    fontSize: 25,
                    fontWeight: 'bold'
                }} >Logo Here</Text>
            </SafeAreaView>
        )
    };
}

export default Splash;

const styles = StyleSheet.create({
    dot: {

        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    headertext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20
    },
    details: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20,
        marginRight: 10
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 15

    }
});