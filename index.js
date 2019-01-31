import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import { Keyboard, AppRegistry } from 'react-native';

import Home from './src/components/CenaPrincipal';
import Etapa1 from './src/components/CenaEtapa1';
import Etapa2 from './src/components/CenaEtapa2';

export default class App3 extends Component{

  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    console.log('Keyboard Shown');
  }

  _keyboardDidHide() {
    console.log('Keyboard Hidden');
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


