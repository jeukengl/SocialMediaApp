import React from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {


    render() {
        return(

                <View style = {styles.container}>
                    <Text style = {styles.header}> Welcome to Circa Home! </Text>
                </View>


        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#2896d3'
    },
    text:{
        color: '#fff'
    }

});

