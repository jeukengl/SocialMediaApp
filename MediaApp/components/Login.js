import React from 'react';
import * as firebase from 'firebase';
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

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDoBfb5gpJesZJ8gs2_YXAeEpbSNzcMAG0",
    authDomain: "app1-a907a.firebaseapp.com",
    databaseURL: "https://app1-a907a.firebaseio.com",
    projectId: "app1-a907a",
    storageBucket: "app1-a907a.appspot.com",
    messagingSenderId: "216353080174"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            email: ' ',
            password: ' ',
            error:' ',
            loading: false
        };
    }

    componenetDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {

        var value = await AsyncStorage.getItem('user');
        if(value !== null){
            this.props.navigation.navigate('Home');

        }
    };


    render() {
        return(


                <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>

                    <View style = {styles.container}>
                        <Text style = {styles.header}> - LOGIN into Circa -</Text>

                        <TextInput
                            style = {styles.textInput} placeholder = 'Email'
                            onChangeText={(email) => this.setState({email})}
                            underlineColorAndroid= 'transparent'
                            />

                        <TextInput
                            style = {styles.textInput} placeholder = 'Password'
                            onChangeText={(password) => this.setState({password})}
                            underlineColorAndroid= 'transparent'
                        />

                        <TouchableOpacity
                            style = {styles.btn}
                            onPress={this.login}>
                        <Text> Log In </Text>
                        </TouchableOpacity>

                    </View>
                </KeyboardAvoidingView>

        );
    }

    //An error should be thrown here if the user does not have valid login information



    login = () => {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate('Profile')
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                alert('Login was not successful :(')

            });
    }

}
const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header:{
        fontSize:24,
        marginBottom: 60,
        color: '#fff',
        fontWeight:'bold',
    },
    textInput:{
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    btn:{
        alignSelf:'stretch',
        backgroundColor: '#01c853',
        padding:20,
        alignItems: 'center',
    }
});

