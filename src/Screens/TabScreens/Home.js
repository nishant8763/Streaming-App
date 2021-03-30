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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>Home</Text>
                </View>
            </SafeAreaView>
        )
    };
}

export default Home;

const styles = StyleSheet.create({
});