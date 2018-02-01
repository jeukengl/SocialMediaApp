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
import {
    RkText,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';

import { Ionicons } from '@expo/vector-icons';

import { StackNavigator } from 'react-navigation';

export default class WalkThrough1 extends React.Component {


    render() {
        return(

            <View style={styles.screen}>
                <RkText rkType='header1' style={styles.text}>Welcome to Circa</RkText>
            </View>


        );
    }
}
let styles = RkStyleSheet.create(theme => ({
    screen: {
        backgroundColor: theme.colors.screen.base,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        marginTop: 20,
        fontSize: 30,
    }
}));

