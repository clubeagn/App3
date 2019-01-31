import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
  ActivityIndicator,
  Alert,
  StatusBar 
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text'
import ToolBar from './ToolBar';
   
export default class Home extends Component{

  constructor(){
    super()
    this.navigate = this.navigate.bind(this);
    
    this.state = {
      showIndicator: false, // loading
      modalWithVehicle: false, // modal
      modalNoVehicle: false, // modal de quem nao tem veiculo
      plate: '', // placa participante
    };
  }
  
  navigate(name){
    this.props.navigator.push({ name })
  }

  naoTenhoVeiculo(){
    this.setState({modalNoVehicle: true});
  }

  // cancela e fecha o modal de indicacao
  cancelIndicacao (){
    this.setState({ modalWithVehicle: false });
    this.setState({ modalNoVehicle: false });
  }

  // cancela e fecha o modal de indicacao
  simTenhoVeiculo(){
    this.setState({modalWithVehicle: true});
    this.setState({ modalNoVehicle: false });
  }

  // cancela e fecha o modal de indicacao
  cancel() {
    this.setState({ modalWithVehicle: false });
    this.setState({ modalNoVehicle: false });
  }

  avancaStep1() {
    let data = { plate: this.state.plate };

    if ( (data.plate.length == 0) || (data.plate.length < 8) ){
      
    Alert.alert(
      'Clube Premiado', 'Qual a placa do seu veículo?',
      [{text: 'Tentar novamente', onPress: () => console.log('OK Pressed')},],
      {cancelable: false},
    );
    
    }else{
        plate = data.plate;
        
        //fecha os modais abertos
        this.setState({ modalWithVehicle: false });
        this.setState({ modalNoVehicle: false });

        this.navigate('etapa1');
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
        <View>
        <StatusBar backgroundColor={'#3686d1'} barStyle="light-content" hidden />
          <ToolBar />

          <ImageBackground source={ require('../../src/imgs/background.png') } style={{width: '100%', height: '100%'}} >

            <View style={styles.boxTitle}>
              <Text style={styles.title}> VOCÊ TEM VEÍCULO? </Text>
              <View style={styles.sub_titlebox}>
                <Text style={styles.sub_title2}>Para participar é muito fácil, basta responder um simples questionário e pronto! Você já está concorrendo.</Text>
              </View>
            </View>

            <View style={styles.containerBtns}>
              <TouchableOpacity onPress={ () => this.naoTenhoVeiculo() }>
                <Image style={styles.btnNao} source={ require('../../src/imgs/btnNao.png') } />
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.simTenhoVeiculo() } >
                <Image style={styles.btnSim} source={ require('../../src/imgs/btnSim.png') } />
              </TouchableOpacity>
            </View>

          </ImageBackground>

          <Modal 
            transparent={false} 
            hardwareAccelerated={true}
            visible={this.state.modalWithVehicle}
            animationType={'fade'}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <View>
              <ImageBackground source={ require('../../src/imgs/bg_step1.png') } style={{width: '100%', height: '100%'}} >
                <View style={ styles.modalWithVehicle }>
                  <View style={ styles.boxTitle}>
                    <Text style={styles.title}>DADOS DO VEÍCULO</Text>
                    <Text style={styles.sub_title}>Utilize a placa do veículo para consultar o resultado</Text>
                  </View>
                    
                    <View style={styles.boxInputs} >

                      <TextInputMask
                      type={'custom'}
                      options={{mask:'AAA-9999'}}
                      returnKeyType="next" 
                      placeholder="Qual a placa do veículo?" 
                      onChangeText={ plate => this.setState({ plate: plate }) }
                      value={this.state.plate} 
                      placeholderTextColor={'#3c3c3c'}
                      maxLength={8} 
                      autoCorrect={false}
                      autoCapitalize = 'characters'
                      contextMenuHidden={true}
                      style = {styles.inputs}
                      blurOnSubmit={ false }
                      onSubmitEditing={() => {
                        Keyboard.dismiss
                        this.avancaStep1();
                      }}
                      />
                    </View>

                    <View style={styles.containerBtns} >

                      <TouchableOpacity onPress={() => { this.cancel(); }}>
                        <Image style={styles.btn} source={ require('../../src/imgs/btnCancelar.png') } />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => { this.avancaStep1(false); }} >
                        <Image style={styles.btn} source={ require('../../src/imgs/btnAvancar.png') } />
                      </TouchableOpacity>

                    </View>
                  </View>
                </ImageBackground>
              </View>
          </Modal>
          
          <Modal 
            transparent={false} 
            hardwareAccelerated={true}
            animationType={'fade'}
            visible={this.state.modalNoVehicle} 
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <View>
              <ImageBackground source={ require('../../src/imgs/bg_indicacao.png') } style={{width: '100%', height: '100%'}} >
                <View style={ styles.boxTitle}>
                  <Text style={styles.title}>QUERO INDICAR UM AMIGO</Text>
                  
                  <View style={styles.sub_titlebox}>
                    <Text style={styles.sub_title2}>Tudo bem se você não tem veículo, aqui você pode indicar um amigo para participar desta promoção</Text>
                  </View>

                </View>
                  
                  <View style={styles.containerBtns} >

                    <TouchableOpacity onPress={() => { this.cancelIndicacao(); }}>
                      <Image style={styles.btn} source={ require('../../src/imgs/btnCancelar.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.simTenhoVeiculo(); }} >
                      <Image style={styles.btn} source={ require('../../src/imgs/btnAvancar.png') } />
                    </TouchableOpacity> 

                  </View>
                  
              </ImageBackground>
            </View>
          </Modal>
        </View>
        
      )
    }
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

  sub_title: {
    fontSize: 18,
  },

  sub_titlebox: {
    marginTop: 10,
    marginBottom: 20,
    width: 600,
    alignItems:'center',
  },
  
  sub_title2: {
    fontSize: 28,
    textAlign:'center',
  },

  boxInputs: {
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 35,
    marginBottom: 25,
  },
    
  btn: {
    borderRadius: 60,
    marginRight: 10,
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
    borderColor: '#3686d1',
    borderWidth: 1,
    color: '#3686d1',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 55,
    fontWeight: 'bold',
  },

  containerBtns: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnNao: {
    borderRadius: 60,
    marginRight: 10,
    width: 350,
    height: 70
  },

  btnSim: {
    borderRadius: 60,
    marginLeft: 10,
    width: 350,
    height: 70
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
    height: 150
 }
})