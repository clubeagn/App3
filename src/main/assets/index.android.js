import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class App3 extends Component{

  render() {
    return (
      <View  behavior="padding" enabled>
        
        <CenaPrincipal />

      </View>
    )
  }

} 

AppRegistry.registerComponent('App3', () => App3);
