import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Text,
  TextInput,
  StatusBar,
  Image,
  } from 'react-native';
import ToolBar from './ToolBar';

export default class CenaEtapa1 extends Component{

  constructor(){
    super()
    this.navigate = this.navigate.bind(this);
  }

  navigate(name){
    this.props.navigator.push({
      name
    })
  }
  
  render() {
    
    return (
      <KeyboardAvoidingView style={ {backgroundColor:'#fff', flex:1} } resetScrollToCoords={ { x: 0, y: 0 } } scrollEnabled={ false } keyboardVerticalOffset={-500} behavior="padding" enabled>
        <ScrollView>

          <StatusBar backgroundColor={'#3686d1'} barStyle="light-content" hidden />
          <ToolBar />

          <View style={ styles.boxQuestion }>
            <Text style={ styles.title }> DADOS DE CONTATO</Text>
          </View>

          <View style={ styles.boxInputs } >
            <TextInput returnKeyType="next" placeholder="Qual o seu nome completo?" style={ styles.inputs } textContentType={ 'name' } maxLength={55} placeholderTextColor={'#3c3c3c'} keyboardType={'default'} autoCorrect={false} autoCapitalize={'characters'} contextMenuHidden={true} />
            <TextInput returnKeyType="next" placeholder="Caso seja o ganhador, podemos te ligar em qual telefone?" style={styles.inputs} textContentType={'telephoneNumber'} maxLength={11} placeholderTextColor={'#3c3c3c'} keyboardType={'number-pad'} autoCorrect={false} autoCapitalize={'characters'} contextMenuHidden={true} />
            <TextInput returnKeyType="next" placeholder="Seu e-mail" style={styles.inputs} textContentType={'emailAddress'} maxLength={40} placeholderTextColor={'#3c3c3c'} keyboardType={'email-address'} autoCorrect={false} autoCapitalize={'characters'} contextMenuHidden={true} />
          </View>
              
          <View style={styles.boxBtn} >
            <TouchableOpacity onPress={ () => this.navigate('etapa2') } >
              <Image style={styles.btnStep1} source={ require('../../src/imgs/btnAvancar.png') } />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({

    inputs: {
      width: 1230,
      height: 70,
      borderRadius: 30,
      fontSize: 20,
      marginTop: 10,
      padding: 15,
      paddingLeft: 25,
      borderWidth: 1,
      color: '#3686d1',
      borderColor: '#3686d1',
    },

    boxQuestion: {
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 25,
    },

    boxInputs: {
      marginLeft: 25,
      marginTop: 35,
      marginBottom: 25,
    },
  
    title: {
      fontSize: 55,
      fontWeight: 'bold',
    },
    
    boxBtn: {
      alignItems: 'flex-end',
      marginTop: 45,
      marginRight: 15,
    },

    btnStep1: {
      borderRadius: 60,
      width: 350,
      height: 70
    }
})