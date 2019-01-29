import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
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
      modalVisible: false, // modal
      plate: '', // placa participante
    };
  }
  
  navigate(name){
    this.props.navigator.push({ name })
  }

  abreModal(){
    this.setState({modalVisible: true});
   // this.navigate('etapa1')
  }

  avancaStep1() {
    let data = { plate: this.state.plate };

    if ( (data.plate.length == 0) || (data.plate.length < 8) ){
      
      alert('Qual a placa do seu veículo?');

    }else{
        plate = data.plate;
        
        this.setState({ modalVisible: false });
        this.setState({ showIndicator: false });
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
            </View>

            <View style={styles.containerBtns}>
              <TouchableOpacity>
                <Image style={styles.btnNao} source={ require('../../src/imgs/btnNao.png') } />
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.abreModal() } >
                <Image style={styles.btnSim} source={ require('../../src/imgs/btnSim.png') } />
              </TouchableOpacity>
            </View>

          </ImageBackground>

          <Modal 
            animationType="fade" 
            transparent={false} 
            hardwareAccelerated={true}
            visible={this.state.modalVisible} 
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <View style={ {marginTop: 22} }>
              <View style={ styles.boxTitle}>
                <Text style={styles.title}>DADOS DO VEÍCULO</Text>
              </View>
                
                <View style={styles.boxInputs} >
                  <TextInputMask
                  type={'custom'}
                  options={{mask:'AAA-9999'}}
                  returnKeyType="next" 
                  placeholder="Qual a placa do seu veículo?" 
                  style={styles.inputs}
                  onChangeText={ plate => this.setState({ plate: plate }) }
                  value={this.state.plate} 
                  textContentType={'name'}
                  placeholderTextColor={'#3c3c3c'}
                  maxLength={8} 
                  keyboardType={'default'} 
                  autoCorrect={false}
                  autoCapitalize={'characters'}
                  contextMenuHidden={true}
                  />
                </View>

                <View style={styles.boxBtn} >
                  <TouchableOpacity onPress={() => { this.avancaStep1(false); }} >
                    <Image style={styles.btnStep1} source={ require('../../src/imgs/btnAvancar.png') } />
                  </TouchableOpacity>
                </View>
                
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