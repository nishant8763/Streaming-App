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
} from "react-native"

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>Likes</Text>
                </View>
            </SafeAreaView>
        )
    };
}

export default Likes;

const styles = StyleSheet.create({
});