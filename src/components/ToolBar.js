import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ToolBar extends Component{

  render() {
    return (
      <View style={styles.ToolBar}>
        <Text style={styles.Titulo} > RESPONDA PARA PARTICIPAR </Text>          
      </View>
    )
  }

}

const styles = StyleSheet.create({

  ToolBar: {
    height: 100,
    padding: 15,
    backgroundColor: '#3686d1',
  },

  Titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#fff',
    fontSize: 45,
  },

})