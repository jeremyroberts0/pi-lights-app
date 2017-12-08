import React, {Component} from 'react'
import { Container, Content, Card, Text } from 'native-base';
import Expo from "expo";

import Header from './header'
import Actions from './actions'
import config from '../config'
import styles from '../styles'


class Home extends Component {

    state = {
        isReady: false
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
    
        this.setState({ isReady: true });
      }

    render () {
        if (!this.state.isReady) return <Expo.AppLoading />

        const allConfig = config.getAll()
        return (
            <Container>
                <Header />
                <Content>
                    <Actions />
                </Content>
                <Card style={styles.card}>
                    <Text>Current Config</Text>
                    {Object.keys(allConfig).map(key => (
                        <Text key={key}>{key}: {allConfig[key]}</Text>
                    ))}
                </Card>
            </Container>
        )
    }
}

export default Home
