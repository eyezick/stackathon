
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {styles} from '../index.ios'

export default class Prices extends Component {
  constructor() {
    super()

    this.state = {ETH: <Image source={require('../progressbar.gif')}/>,
                  ETH2: <Image source={require('../progressbar.gif')}/>,
                  lastTrades: []}

    super()

    this.getData = this.getData.bind(this)
    this.getPriceChange = this.getPriceChange.bind(this)
    this.renderTrades = this.renderTrades.bind(this)
  }

  getData(){
    console.log('GETTING data')
    async function getMoviesFromApi() {
      try {
        let response = await fetch('https://api.gdax.com/products/ETH-USD/trades');
        let responseJson = await response.json();
        return responseJson
      } catch(error) {
        console.error(error);
      }
    }
    getMoviesFromApi().then( trades => {

      let sizeable = trades.filter(trade=> trade.size >= 1)

      this.setState({ETH: trades[0].price.slice(0,5), lastTrades: sizeable.slice(sizeable.length-5,sizeable.length)})
    })
  }

  getPriceChange(){
    console.log('change firing')
    async function getPrice() {
      try {
        let response = await fetch('https://api.gdax.com/products/ETH-USD/stats');
        let responseJson = await response.json();
        return responseJson
      } catch(error) {
        console.error(error);
      }
    }

    getPrice().then(data =>{
      console.log('pricedata',data)
      let change = (((data.last - data.open)/data.last).toFixed(4)*100).toFixed(2)
      this.setState({ETH2:change})
    })
      .catch(console.error)
  }

  renderTrades(){
    if(!this.state.lastTrades.length) return (<View><Image source={require('../progressbar.gif')}/><Image source={require('../progressbar.gif')}/><Image source={require('../progressbar.gif')}/><Image source={require('../progressbar.gif')}/><Image source={require('../progressbar.gif')}/></View>)

    return this.state.lastTrades.map(trade => {
          return <Text style={styles.items} key={trade.trade_id}>{`$${((trade.price * trade.size).toFixed(2))}        ${trade.side}         $${trade.price.slice(0,5)}         ${Number(trade.size).toFixed(2)}`}</Text>
      })
  }

  componentDidMount(){
    // fetch('https://api.gdax.com/products/ETH-USD/trades').then(function (data) {
    //   return data.json()
    // }).then(function (last100Trades) {
    //   this.setState({ETH: 'sdfd'})
    // })
    //   .catch(console.error)
      this.getData()

    setTimeout(() => {
      this.getPriceChange()
    },2000)
      }


  render() {

    return (
      <View>
        <Text style={styles.welcome}>${this.state.ETH}</Text>
        <Text style={styles.welcome2}>{this.state.ETH2}%</Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={styles.caption}>     Size              Side            Price             Amount</Text>
        <View style={{flexDirection: 'column'}}>

          {this.renderTrades()}
        </View>
      </View>)

  }
}


// return (<View><Text style={styles.welcome}>{this.state.ETH}</Text></View>)