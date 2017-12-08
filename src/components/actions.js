import React, {Component} from 'react'
import { List, ListItem, Text, Spinner } from 'native-base';
import { View } from 'react-native'
import leds from '../leds'
import styles from '../styles'

class Actions extends Component {
    state = {
        status: 'None',
        isLoading: false
    }
    actions = [
        {
            title: 'Reset to White',
            onPress: () => {
                this.setState({isLoading: true})
                leds.reset()
                    .then(() => this.setState({status: 'White'}))
                    .catch(() => this.setState({status: 'Error setting to white'}))
                    .then(() => this.setState({isLoading: false}))
            },
        },
        {
            title: 'Rainbow',
            onPress: () => {
                leds.rainbow()
                    .then(() => this.setState({status: 'Rainbow'}))
                    .catch(() => this.setState({status: 'Error setting to rainbow'}))
                    .then(() => this.setState({isLoading: false}))
            },
        },
        {
            title: 'Xmas',
            onPress: () => {
                leds.xmas()
                    .then(() => this.setState({status: 'Xmas'}))
                    .catch(() => this.setState({status: 'Error setting to xmas'}))
                    .then(() => this.setState({isLoading: false}))
            },
        },
        {
            title: 'Off',
            onPress: () => {
                leds.off()
                    .then(() => this.setState({status: 'Off'}))
                    .catch(() => this.setState({status: 'Error turning off'}))
                    .then(() => this.setState({isLoading: false}))
            },
        }
    ]
    render () {
        return (
            <View>
                <List>
                    {this.actions.map((action, index) => (
                        <ListItem key={index} onPress={this.state.isLoading ? null : action.onPress}>
                            <Text style={styles.action}>{action.title}</Text>
                        </ListItem>
                    ))}
                    <ListItem>
                        <Text>Status: {this.state.isLoading ? 'Loading' : this.state.status}</Text>
                    </ListItem>
                </List>
                {this.state.isLoading && <Spinner />}
            </View>
        )
    }
}

export default Actions
