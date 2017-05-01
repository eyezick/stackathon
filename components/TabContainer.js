
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';



import Prices from './Prices'
import GoogleTrends from './GoogleTrends'
import Reddit from './Reddit'

export default class TabContainer extends Component {
  constructor(props) {
    super(props)
  }

  selectedComponent(){
    if (this.props.chosen =='Prices') return <Prices/>
    else if (this.props.chosen =='Trends') return <GoogleTrends/>
    else if (this.props.chosen =='Reddit') return <Reddit/>
  }

  render() {
    console.log('PROPS',this.props)
    return (<View >{this.selectedComponent()}</View>)
  }
}