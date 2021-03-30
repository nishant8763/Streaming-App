import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    ScrollView,
} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ToastMessage from "../toastMessage/ToastMessage";
import { CallApi } from "../config/callApi";
import Colors from "../Style/Colors";
import Styles from "../Style/Style";
const { height, width } = Dimensions.get('window')
const image_height = height * .28
const icon_size = 30
class ListingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list_data: [],
            loader: false,
            isFetching: false
        };
    }
    onRefresh = () => {
        this.setState({
            isFetching: true
        });
        this.Data("x")

    }
    componentDidMount() {
        console.log('props', this.props)
        this.Data()
    }
    Data = async (x) => {
        { x !== "x" ? (this.setState({ loader: true })) : null }

        return CallApi('GET', this.props.Api, '').then((res) => {
            this.setState({ loader: false, isFetching: false });
            // console.log('res ', res)
            if (res.status === "success") {
                this.setState({
                    list_data: res.place
                })
            } else {
                ToastMessage({
                    message: res.message,
                    type: res.type || 'warning',
                });
            }
        });

    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <View style={styles.line} />
                {this.state.loader === true ? (

                    <View style={Styles.loader}>
                        <ActivityIndicator size="large" color={Colors.primary} />
                    </View>

                ) : (
                    <FlatList
                        style={{ alignSelf: 'center' }}
                        data={this.state.list_data}
                        onRefresh={this.onRefresh}
                        refreshing={this.state.isFetching}
                        keyExtractor={(item, index) => `${index}K`}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.fl_view} >
                                    <Image
                                        style={{
                                            height: 280, width: width * .45,
                                            borderRadius: 8
                                        }}
                                        source={{ uri: item.image }}
                                    />
                                    <View style={{ position: 'absolute', bottom: 5, left: 5 }} >
                                        <Text style={{
                                            color: Colors.white,
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            fontFamily: Colors.font_Bold,
                                            marginLeft: 5
                                        }} >
                                            {item.title}</Text>
                                        <Text style={{
                                            color: Colors.white,
                                            fontSize: 13,
                                            fontFamily: Colors.font_Regular,
                                            marginLeft: 5,
                                            width: width * .4,
                                        }} >
                                            {item.desc}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />)}
            </SafeAreaView>
        )
    };
}

export default ListingComponent;

const styles = StyleSheet.create({
    fl_view: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    title: {
        color: Colors.black,
        fontSize: 21,
        fontFamily: Colors.font_Bold
    },
    sub_text: {
        color: Colors.white,
        fontSize: 18,
        // fontWeight: 'bold',
        fontFamily: Colors.font_medium
    },
    icon: {
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingLeft: 7,
        paddingRight: 5,
        alignSelf: 'center'
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    }
});
