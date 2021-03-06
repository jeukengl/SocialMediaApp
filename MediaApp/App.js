import React from 'react';
import {
    Button, Dimensions, StyleSheet,
    View, FlatList
} from 'react-native';
import {RkStyleSheet} from 'react-native-ui-kitten';

import { Ionicons } from '@expo/vector-icons';
import Login from './components/Login';
import Profile from './components/Home';
import WalkThrough1 from './screens/walkthrough/WalkThrough1';
import WalkThrough2 from './screens/walkthrough/WalkThrough2';
import { StackNavigator } from 'react-navigation';
import {Walkthrough} from "./components/Walkthrough";
import {PaginationIndicator} from "./components/PaginationIndicator";
import WalkThrough3 from "./screens/walkthrough/WalkThrough3";
import SignUp from "./components/SignUp.js";




//This is the first page of the application. Walkthrough the steps of use.

export class WalkThroughScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    changeIndex(index) {
        this.setState({index})
    }

    render() {
        return (
            <View style={styles.screen}>
                <Walkthrough onChanged={(index) => this.changeIndex(index)}>

                    <WalkThrough1/>
                    <WalkThrough2/>
                    <WalkThrough3/>
                </Walkthrough>
                <PaginationIndicator length={3} current={this.state.index}/>
                <Button
                    rkType='large'
                    title= 'GET STARTED'
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Login');
                    }}
                    text="GET STARTED">
                </Button>
            </View>
        )
    }
}
//End Walk through

let styles = RkStyleSheet.create(theme => ({
    screen: {
        backgroundColor: theme.colors.screen.base,
        paddingVertical: 28,
        alignItems: 'center',
        flex: 1,
    },
    button: {
        marginTop: 25,
        marginHorizontal: 16,
    }
}));
//End walk through style



const Application = StackNavigator({
    //The home screen is the name of the import in this case 'WalkThroughScreen'

    Home: {
        screen: WalkThroughScreen,
    },
    Login: {screen:Login},
    Profile: {screen:Profile},
    //WalkThrough1: {screen: WalkThrough1},
    WalkThrough2: {screen: WalkThrough2},
    SignUp: {screen:SignUp},

}, {
   navigationOptions: {
      header: false,
   }
});

export default class App extends React.Component {


  render() {
    return(


        <Application/>

      );
    }
  }


