
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {styles} from '../index.ios'


export default class Reddit extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const axios = require('axios')

    axios.get('https://www.reddit.com/r/ethtrader.json').then(stuff => {
      console.log(stuff.data.data.children[0].data.num_comments)
    }).catch(console.error)
  }

  render() {
    return (<Text style={styles.welcome}>Thumbs Up/Down</Text>)
  }
}
// image is working