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
    TextInput, Dimensions, ScrollView
} from "react-native"

import Colors from "../component/Style/Colors";
import { CallApi } from "../component/config/callApi";
import ToastMessage from "../component/toastMessage/ToastMessage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Styles from "../component/Style/Style";
const { height, width } = Dimensions.get('window')
class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Channels: this.props.route.params.item.events,
            loader: false
        };
    }
    componentDidMount() {
        console.log('props ', this.props.route.params.item.events)
        // this.ChannelData()
    }
    ChannelData = async (x) => {
        this.setState({ loader: true })
        return CallApi('GET', '/swtvcheck', '').then((res) => {
            this.setState({ loader: false, isFetching: false });
            console.log('res ', res)
            if (res) {
                this.setState({
                    Channels: res.resp
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
        const { Channels, loader } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <StatusBar
                    translucent={false}
                    backgroundColor={Colors.primary}
                    barStyle="light-content"
                />

                <ScrollView style={{ backgroundColor: Colors.primary, paddingStart: 10, flex: 1, paddingTop: 10 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                        <Ionicons name={'menu'} size={35} color={Colors.white} style={{ alignSelf: 'center' }} />
                        <View style={{ flexDirection: 'row', backgroundColor: '#120C26', width: '85%', borderRadius: 10 }}>
                            <TextInput
                                style={{ width: '87%', paddingStart: 10 }}
                                placeholder={'Search Here'}
                                placeholderTextColor={'#fff'}
                            />
                            <Ionicons name={'search'} size={30} color={Colors.white} style={{ alignSelf: 'center' }} />
                        </View>
                    </View>
                    {loader === true ? (
                        <View style={{
                            marginTop: height * .40,
                            backgroundColor: Colors.primary,
                        }}>
                            <ActivityIndicator size="large" color={Colors.white} style={{ alignContent: 'center' }} />
                        </View>

                    ) : (<View>
                        {/* All channels with description  */}
                        <View style={{ marginTop: 15, marginBottom: 15 }} >
                            <FlatList
                                style={{}}
                                data={Channels}
                                keyExtractor={(item, index) => `${index}K`}
                                // numColumns={2}
                                // horizontal
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    // console.log(item)
                                    return (
                                        <View style={styles.fl_view} >
                                            <Text style={styles.header_text}>{item.name}</Text>
                                            <Image
                                                style={{
                                                    height: 250, width: '100%',
                                                    borderRadius: 8
                                                }}
                                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEaxBegu8j6QiowcM2DUEX5oG26LCThWEEA&usqp=CAU' }}
                                            />
                                        </View>
                                    )

                                }}
                            />
                        </View>
                    </View>)}
                </ScrollView>
            </SafeAreaView>
        )
    };
}

export default Listing;

const styles = StyleSheet.create({
    header_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text_color,

    },
    fl_view: {
        marginEnd: 10,
        marginTop: 10,
    }
});