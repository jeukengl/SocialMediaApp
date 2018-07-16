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
    Picker,
    ScrollView
} from 'react-native';
import {
    RkText,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';


import { Ionicons } from '@expo/vector-icons';



export default class Login extends React.Component {
//defined the state of variables
    constructor(props){
        super(props);
        this.state ={
            email: ' ',
            password: ' ',
            firstName: ' ',
            lastName: ' ',
            age: ' ',
            gender: ' ',
            phoneNumber: ' ',
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
                <ScrollView>

                <View style = {styles.screen}>
                    <RkText rkType='header1' style={styles.text}>  Sign-Up with Your Email </RkText>

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

                    <TextInput
                        style = {styles.textInput} placeholder = 'Enter your first name'
                        onChangeText={(firstName) => this.setState({firstName})}
                        underlineColorAndroid= 'transparent'
                    />

                    <TextInput
                        style = {styles.textInput} placeholder = 'Enter your last name'
                        onChangeText={(lastName) => this.setState({lastName})}
                        underlineColorAndroid= 'transparent'
                    />

                    <TextInput
                        style = {styles.textInput} placeholder = 'Enter your age'
                        onChangeText={(age) => this.setState({age})}
                        underlineColorAndroid= 'transparent'
                    />

                    <TextInput
                        style = {styles.textInput} placeholder = 'Enter your gender'
                        onChangeText={(gender) => this.setState({gender})}
                        underlineColorAndroid= 'transparent'
                    />

                    <TextInput
                        style = {styles.textInput} placeholder = 'Enter your phone number'
                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        underlineColorAndroid= 'transparent'
                    />

                    <TouchableOpacity
                        style = {styles.signup}
                        onPress={this.signup}>
                        <Text> Sign Up </Text>
                    </TouchableOpacity>



                </View>
                </ScrollView>
            </KeyboardAvoidingView>

        );
    }

    //An error should be thrown here if the user does not have valid login information



    signup = () => {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate('Profile')
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                alert('Sign Up was not successful :(')

            });
    };



}
let styles = RkStyleSheet.create(theme => ({

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
    }, screen: {
        backgroundColor: theme.colors.screen.base,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        marginTop: 20,
        fontSize: 30,
    },
    signup:{
        alignSelf:'stretch',
        backgroundColor: '#778899',
        padding:20,
        alignItems: 'center'
    }
}));

