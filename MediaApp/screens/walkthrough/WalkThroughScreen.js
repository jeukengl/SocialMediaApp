import React from 'react';
import {
    Button,
    View
} from 'react-native';
import {RkStyleSheet} from 'react-native-ui-kitten';
import {Walkthrough} from '../../components/Walkthrough';
import {WalkThrough1} from './WalkThrough1';
import {WalkThrough2} from './WalkThrough2';
//import {PaginationIndicator} from 'MediaApp/components/PaginationIndicator';


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
                </Walkthrough>
                <PaginationIndicator length={2} current={this.state.index}/>

                <Button
                    rkType='large'
                    title= 'GET STARTED'
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                    text="GET STARTED">
                </Button>
            </View>
        )
    }
}

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
