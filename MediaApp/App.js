import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import Login from './components/Login';
import Profile from './components/Home';
import WalkThrough1 from './screens/walkthrough/WalkThrough1';
import WalkThrough2 from './screens/walkthrough/WalkThrough2';



import { StackNavigator } from 'react-navigation';
import WalkThroughScreen from "./screens/walkthrough/WalkThroughScreen";
const Application = StackNavigator({
    //The home screen is the name of the import in this case 'WalkThrough1

    Home: {
        screen: WalkThrough1,
    },
    Login: {screen:Login},
    Profile: {screen:Profile},
    //WalkThrough1: {screen: WalkThrough1},
    WalkThrough2: {screen: WalkThrough2},

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


