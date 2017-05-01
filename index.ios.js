

{/*import React, { Component } from 'react';*/}
{/*import {*/}
{/*AppRegistry,*/}
{/*StyleSheet,*/}
{/*Text,*/}
{/*View,*/}
{/*Image*/}
{/*} from 'react-native';*/}

{/*import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';*/}

{/*class FlexDimensionsBasics extends Component {*/}
{/*render() {*/}
{/*return (*/}
{/*// Try removing the `flex: 1` on the parent View.*/}
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>
//         <View style={{height:30,width: 50, backgroundColor: 'powderblue'}}>
//
//         </View>
//         <View style={{height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{height: 200,width: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
//
//
//
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';

import Prices from './components/Prices'
import TabContainer from './components/TabContainer'

export default class Example extends Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};


    this.renderSelectedTab = this.renderSelectedTab.bind(this)
  }


  renderSelectedTab(el) {
    if (el.props.children == 'Prices') this.setState({page:'Prices'})
    else if (el.props.children == 'Trends') this.setState({page:'Trends'})
    else if (el.props.children == 'Reddit') this.setState({page:'Reddit'})
  }

  // selectedStyle={{color:'red'}} onSelect={el=>{this.setState({page:el.props.name});console.log(el)}}>
//
// <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
// selectedStyle={{color:'red'}} onSelect={this.renderSelectedTab}>
//
  render() {
    var self = this;
    return (
      <View style={styles.container} >
        <Tabs style={{backgroundColor:'white'}} onSelect={this.renderSelectedTab}>
          <Text name="first">Prices</Text>
          <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Trends</Text>
          <Text name="third">Reddit</Text>
        </Tabs>

        <Text style={styles.intro}>Cryptoo much Information</Text>
        {/*<Text style={styles.instructions}>By Isaac Ibiapina</Text>*/}
        <TabContainer chosen={this.state.page} />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
    flexDirection:'column'
    // backgroundColor: '#F5FCFF',
  },
  priceTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
    flexDirection:'column'
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  welcome2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    // color: '#333333',
    marginBottom: 5,

  },
  items: {
    textAlign: 'left',
    color: 'white',
    // color: '#333333',
    marginBottom: 5,

  },
  caption: {
    fontWeight:'bold',
    textAlign: 'center',
    color: 'white',
    // color: '#333333',
    marginBottom: 5,

  },
  intro: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
});

AppRegistry.registerComponent('proj4', () => Example);