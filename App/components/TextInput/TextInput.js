import React from 'react';
import {View,Text,TextInput} from 'react-native';
import style from './style';
const TextInputComponent=(props)=>{
  return(
    <View style={style.container}>
      <Text style={style.text}>{props.title}</Text>
      <TextInput
        multiline={props.multiline}
        style={props.style?props.style:style.text_input}
        onChangeText={(text) => {props.onChangeText(text)}}
        underlineColorAndroid='transparent'
      />
    </View>
  );
}
export default TextInputComponent;
