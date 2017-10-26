import React from 'react';
import {View,Text} from 'react-native';
import style from './styles'
const ToolBarModal=(props)=>{
  return(
    <View style={style.toolbar}>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
}

export default ToolBarModal;
