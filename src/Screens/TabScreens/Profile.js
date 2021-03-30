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
    TextInput,
    ScrollView,
} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from "../../component/Style/Colors";
import ToastMessage from "../../component/toastMessage/ToastMessage";
import { CallApi } from "../../component/config/callApi";
import Styles from "../../component/Style/Style";
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Phone: '',
            Address: '',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUaN7lCSO1ZBI6cEeWEFgoVEO0VFrdHA5HNw&usqp=CAU'
        };
    }
    render() {
        const { Name, Email, Phone, Address, image } = this.state
        return (
            <SafeAreaView style={{ paddingStart: 10, flex: 1, paddingTop: 10, backgroundColor: '#f2f2f2', }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={styles.title} >Profile</Text>
                        <Text style={{
                            fontSize: 20,
                            color: '#888',
                            fontFamily: Colors.font_Bold,
                        }} >Please Complete Your Profile</Text>
                    </View>
                    {/* image */}
                    <View style={{ marginVertical: 30, height: 150, width: 150, }} >
                        <Image
                            style={{
                                height: 150, width: 150,
                                borderRadius: 10
                            }}
                            source={{ uri: image }}
                        />
                        <FontAwesome name="camera" size={30} color={Colors.white}
                            onPress={() => alert('image Upload')}
                            style={{
                                backgroundColor: Colors.primary,
                                position: 'absolute',
                                padding: 12,
                                borderRadius: 50,
                                left: 115,
                                bottom: -15
                            }} />
                    </View>
                    {/* data fill up */}
                    <View>
                        <View style={styles.t_view} >
                            <Text style={styles.T_text} >Name</Text>
                            <TextInput
                                placeholder="Name"
                                placeholderTextColor={Colors.text_color}
                                style={styles.textinput}
                                keyboardType={'default'}
                                value={Name}
                                onChangeText={(value) => this.setState({ Name: value })}
                            />
                        </View>
                        <View style={styles.t_view} >
                            <Text style={styles.T_text} >Email</Text>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={Colors.text_color}
                                style={styles.textinput}
                                keyboardType={'email-address'}
                                value={Email}
                                onChangeText={(value) => this.setState({ Email: value })}
                            />
                        </View>
                        <View style={styles.t_view} >
                            <Text style={styles.T_text} >Phone</Text>
                            <TextInput
                                placeholder="Phone"
                                placeholderTextColor={Colors.text_color}
                                style={styles.textinput}
                                keyboardType={'number-pad'}
                                value={Phone}
                                onChangeText={(value) => this.setState({ Phone: value })}
                            />
                        </View>
                        <View style={styles.t_view} >
                            <Text style={styles.T_text} >Address</Text>
                            <TextInput
                                placeholder="Address"
                                placeholderTextColor={Colors.text_color}
                                style={styles.textinput}
                                keyboardType={'default'}
                                value={Address}
                                onChangeText={(value) => this.setState({ Address: value })}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => alert('Save')}
                        style={{
                            backgroundColor: Colors.primary,
                            alignSelf: 'center',
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginBottom: 15
                        }} >
                        <Text style={{
                            fontSize: 20, fontWeight: 'bold',
                            fontFamily: Colors.font_Bold, color: '#fff',
                        }} >
                            Save
                    </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    };
}

export default Profile;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#888',
        fontWeight: 'bold',
        fontFamily: Colors.font_Bold
    },
    t_view: {
        marginBottom: 10
    },
    T_text: {
        fontSize: 18,
        color: '#888',
        fontWeight: 'bold',
        fontFamily: Colors.font_Bold,
        marginBottom: 7
    },
    textinput: {
        backgroundColor: Colors.white,
        width: '95%',
        borderRadius: 30, paddingStart: 15,

    },
});