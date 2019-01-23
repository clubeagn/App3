import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Text,
  StatusBar,
  Image,
  Picker} from 'react-native';
import ToolBar from './ToolBar';

export default class CenaEtapa2 extends Component{
  constructor(){
    super()
    this.navigate = this.navigate.bind(this);
  }

  navigate(url){
    this.props.navigator.push({
      url
    })
  }

  render() {
    
    return (
      <KeyboardAvoidingView style={ {backgroundColor:'#fff', flex:1} } resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} keyboardVerticalOffset={-500} behavior="padding" enabled>
        <ScrollView>
          <StatusBar backgroundColor={'#3686d1'} barStyle="light-content" hidden />
          <ToolBar />

          <View style={styles.boxQuestion}>
            <Text style={styles.title}> PARABÉNS! </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.subtitle}>
              PRONTO, VOCÊ JÁ ESTÁ PARTICIPANDO, para consultar o resultado da promoção entre em nosso site www.clubepremiado.com.br
              e consulte o resultado com a placa inserida. 
              OLX-0000
            </Text>
          </View>
              
          <View style={styles.boxBtn} >
            <TouchableOpacity onPress={ () => this.navigate('home') } >
              <Image style={styles.btnStep1} source={ require('../../src/imgs/btnFim.png') } />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({

  boxQuestion: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  
  box: {
    alignItems: 'center',
  },
  
  subtitle: {
    width: 900,
    alignItems: 'center',
    fontSize: 22,
    fontWeight: 'normal',
  },

  title: {
    fontSize: 55,
    fontWeight: 'bold',
  },
  
  boxBtn: {
    alignItems: 'center',
    marginTop: 70,
    marginRight: 15,
  },

  btnStep1: {
    borderRadius: 60,
    width: 350,
    height: 70
  }
})