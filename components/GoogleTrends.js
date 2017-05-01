
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {styles} from '../index.ios'

export default class GoogleTrends extends Component {
  constructor() {
    super()

    this.state = {num: '#'}
  }

  componentDidMount() {
    const axios = require('axios')

    axios.get('https://www.reddit.com/r/ethtrader.json').then(stuff => {
      this.setState({num:(stuff.data.data.children[0].data.num_comments)})
    }).catch(console.error)
  }

  render() {
    console.log('Google component here')
    return (<Text style={styles.welcome}>{this.state.num} comments today!</Text>)
  }
}