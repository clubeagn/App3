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
  } from 'react-native';
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
            <Text style={styles.title}> VOCÊ JÁ ESTÁ CONCORRENDO! </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.subtitle}>
              PRONTO, agora é só aguardar pelo sorteio, caso seja o sortudo não se preocupe nosso Back Office ligará pra você avisando! E lembre-se: você utilizar sua placa para consultar o resultado da promoção, basta entrar em nosso site www.clubepremiado.com.br
              </Text>
          </View>

          <View style={styles.box}>
             
              <Text style={styles.plate}>
                {plate}
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

  plate: {
    fontSize: 55,
    fontWeight: 'bold',
    marginTop: 10,
  },

  btnStep1: {
    borderRadius: 60,
    width: 350,
    height: 70
  }
})