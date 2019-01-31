import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Text,
  StatusBar,
  Keyboard,
  ImageBackground,
  Image,
  } from 'react-native';
export default class CenaEtapa2 extends Component{
  constructor(){
    super()
    this.navigate = this.navigate.bind(this);
  }

  navigate(url){
    this.props.navigator.push({ url })
  }

  render() {
    
    return (
      <KeyboardAvoidingView style={ {backgroundColor:'#fff', flex:1} } resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} keyboardVerticalOffset={-500} behavior="padding" enabled>
        <ImageBackground source={ require('../../src/imgs/bg_fim.png') } style={{width: '100%', height: '100%'}} >
        <ScrollView>
          <StatusBar backgroundColor={'#3686d1'} barStyle="light-content" hidden />
          <View style={styles.boxQuestion}>
            <Text style={styles.title}> VOCÊ JÁ ESTÁ CONCORRENDO! </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.subtitle}>
              Pronto, agora é só aguardar pelo sorteio, caso seja o sortudo não se preocupe a gente liga pra você avisando! E lembre-se: você deve utilizar sua placa para consultar o resultado da promoção, basta entrar em nosso site www.clubepremiado.com.br
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
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({

  boxQuestion: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 50,
  },
  
  box: {
    alignItems: 'center',
  },
  
  subtitle: {
    width: 900,
    textAlign:'center',
    fontSize: 22,
    fontWeight: 'normal',
  },

  sub_title: {
    fontSize: 18,
  },

  sub_titlebox: {
    marginTop: 50,
    marginBottom: 50,
    width: 600,
    alignItems:'center',
  },
  
  sub_title2: {
    fontSize: 28,
    textAlign:'center',
  },

  title: {
    fontSize: 45,
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