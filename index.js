import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import { AppRegistry } from 'react-native';

import Home from './src/components/CenaPrincipal';
import Etapa1 from './src/components/CenaEtapa1';
import Etapa2 from './src/components/CenaEtapa2';

export default class App3 extends Component{

  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator){

    switch(route.name){
      case 'home' : 
      return <Home navigator={navigator} />;

      case 'etapa1' : 
      return <Etapa1 navigator={navigator} />;

      case 'etapa2' : 
      return <Etapa2 navigator={navigator} />;

      default:
      return <Home navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home' }}
        renderScene={ this.renderScene }
      />
    )
  }

} 

AppRegistry.registerComponent('App3', () => App3);


