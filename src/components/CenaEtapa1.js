import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Text,
  TextInput,
  ActivityIndicator,
  StatusBar,
  Image,
  } from 'react-native';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text'
import ToolBar from './ToolBar';

export default class CenaEtapa1 extends Component{

  constructor() {
    super()
    this.navigate = this.navigate.bind(this);

    this.state = {
      showIndicator: false, // loading 
      name: '', // nome participante
      telephone: '', // telefone participante
      email: '', // email participante
    };
  }

  navigate(name){
    this.props.navigator.push({
      name
    })
  }
    
  funcaoPost = () => {

    let data = { name: this.state.name, plate: plate, telephone: this.state.telephone, email: this.state.email };

    if ( (data.name.length == 0) || (data.name.length < 5) ){
      
      alert('Qual o seu nome completo?');

    }else{

      if( (data.telephone.length == 0) || (data.telephone.length < 9)){

        alert('Caso você seja o sortudo(a) em qual telefone podemos te ligar?');

      }else{

        if( (data.email.length == 0) || (data.email.length < 5)){

          alert('Deixe seu e-mail, caso você seja o sortudo(a)');
  
        }else{

          this.setState({ showIndicator: true });

          console.log(data);
          axios.post('https://api.clubepremiado.com.br/v1/post-participants', { 
            token_api: 'e807f1fcf82d132f9bb018ca6738a10f', 
            name: this.state.name, 
            plate: plate,
            telephone: this.state.telephone, 
            email: this.state.email
          })
          .then(res => {

            this.setState({ showIndicator: false });
            console.log(res.data.gravou);

            if(res.data.gravou == 'nao'){
              alert(res.data.mensagem);
              this.navigate('home');
            }else{
              this.navigate('etapa2');
            }
    
          })
          .catch(function (error) {
            this.setState({ showIndicator: false });
            console.log(error);
          });
  
        }

      }

    }

  }

  render() {

    if(this.state.showIndicator){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }else{
      return (
        <KeyboardAvoidingView style={ {backgroundColor:'#fff', flex:1} } resetScrollToCoords={ { x: 0, y: 0 } } scrollEnabled={ false } keyboardVerticalOffset={-500} behavior="padding" enabled>
          <ScrollView>
            <StatusBar backgroundColor={'#3686d1'} barStyle="light-content" hidden />
            <ToolBar />

            <View style={ styles.boxQuestion }>
              <Text style={ styles.title }> DADOS DE CONTATO</Text>
            </View>

            <View style={ styles.boxInputs } >
              <TextInput returnKeyType="next" onChangeText={ name => this.setState({ name: name }) } value={this.state.name} placeholder="Qual o seu nome completo?" style={ styles.inputs } textContentType={ 'name' } maxLength={55} placeholderTextColor={'#3c3c3c'} keyboardType={'default'} autoCorrect={false} autoCapitalize={'sentences'} contextMenuHidden={true} />
              <TextInputMask
                  type={'cel-phone'}
                  options={{mask:'(99)99999-9999'}}
                  returnKeyType="next"
                  onChangeText={ telephone => this.setState({ telephone: telephone }) } 
                  value={this.state.telephone} 
                  placeholder="Caso você seja o sortudo(a) em qual telefone podemos te ligar?" 
                  style={styles.inputs} 
                  textContentType={'telephoneNumber'} 
                  maxLength={15} 
                  placeholderTextColor={'#3c3c3c'}
                  keyboardType={'phone-pad'} 
                  autoCorrect={false} 
                  contextMenuHidden={true}
                  />
              <TextInput returnKeyType="next" onChangeText={ email => this.setState({ email: email }) } value={this.state.email} placeholder="Deixe seu e-mail, caso você seja o sortudo(a)" style={styles.inputs} textContentType={'emailAddress'} maxLength={99} placeholderTextColor={'#3c3c3c'} keyboardType={'email-address'} autoCorrect={false} autoCapitalize={'sentences'} contextMenuHidden={true} />
            </View>

            <View style={styles.boxBtn} >
              <TouchableOpacity onPress={ () => this.funcaoPost() } >
                <Image style={styles.btnStep1} source={ require('../../src/imgs/btnAvancar.png') } />
              </TouchableOpacity>
            </View>

          </ScrollView>
        </KeyboardAvoidingView>
      )
    }
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
      marginTop: 15,
      marginBottom: 15,
    },

    boxDouble: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: 1,
      marginLeft: 25,
      marginBottom: 15,
    },

    inputP: {
      width: 600,
      height: 70,
      borderRadius: 30,
      fontSize: 20,
      padding: 15,
      paddingLeft: 55,
      marginRight: 30,
      borderWidth: 1,
      color: '#3686d1',
      borderColor: '#3686d1',
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
      height: 70,
      marginRight: 10,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})