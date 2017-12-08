import React, {Component} from 'react'
import { Header, Body, Title, Left, Right } from 'native-base'
import styles from '../styles'
export default () => (
    <Header>
        <Left />
        <Body>
            <Title style={styles.center}>Pi Lights</Title>
        </Body>
        <Right />
    </Header>
)