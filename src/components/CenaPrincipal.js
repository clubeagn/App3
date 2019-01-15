import React, { Component } from 'react';
import axios from 'axios';
import { Modal, StyleSheet, View, TextInput, ImageBackground, TouchableOpacity, Image, Text, StatusBar } from 'react-native';
import ToolBar from './ToolBar';
   
export default class Home extends Component{

  constructor(){
    super()
    this.navigate = this.navigate.bind(this);
  }

  navigate(name){
    this.props.navigator.push({
      name
    })
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {

    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({modalVisible: visible});
    this.navigate('etapa1');
  }

  render() {
    return (
      <View>
       <StatusBar backgroundColor={'#3686d1'} barStyle="light-content" hidden />
        <ToolBar />

        <ImageBackground source={ require('../../src/imgs/background.png') } style={{width: '100%', height: '100%'}} >

          <View style={styles.boxTitle}>
            <Text style={styles.title}> VOCÊ TEM VEÍCULO? </Text>
          </View>

          <View style={styles.containerBtns}>
            <TouchableOpacity onPress={ () => { this.setModalVisible(true); } } >
              <Image style={styles.btnNao} source={ require('../../src/imgs/btnNao.png') } />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => this.navigate('etapa1') } >
              <Image style={styles.btnSim} source={ require('../../src/imgs/btnSim.png') } />
            </TouchableOpacity>
          </View>

        </ImageBackground>

        <Modal 
          animationType="slide" 
          transparent={false} 
          hardwareAccelerated={true}
          visible={this.state.modalVisible} 
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={ {marginTop: 22} }>
            <View style={ styles.boxTitle}>
              <Text style={styles.title}>DADOS DO VEÍCULO</Text>
            </View>
              
              <View style={styles.boxInputs} >
                <TextInput returnKeyType="next" placeholder="Qual a placa do seu veículo?" style={styles.inputs} textContentType={'name'} maxLength={55} placeholderTextColor={'#3c3c3c'} keyboardType={'default'} autoCorrect={false} autoCapitalize={'characters'} contextMenuHidden={true} />
              </View>

              <View style={styles.boxBtn} >
                <TouchableOpacity onPress={() => { this.setModalVisible(false); }} >
                  <Image style={styles.btnStep1} source={ require('../../src/imgs/btnAvancar.png') } />
                </TouchableOpacity>
              </View>
              
          </View>
        </Modal>
      </View>
      
    )
  }

}

const styles = StyleSheet.create({

  boxTitle: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },

  title: {
    fontSize: 55,
    fontWeight: 'bold',
  },

  boxInputs: {
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 35,
    marginBottom: 25,
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
  },
  
  inputs: {
    width: 600,
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

  title: {
    fontSize: 55,
    fontWeight: 'bold',
  },

  containerBtns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },

  btnNao: {
    borderRadius: 60,
    marginRight: 10,
    width: 350,
    height: 80
  },

  btnSim: {
    borderRadius: 60,
    marginLeft: 10,
    width: 350,
    height: 80
  }

})