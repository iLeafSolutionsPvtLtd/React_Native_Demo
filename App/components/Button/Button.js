import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import style from './style';

const Button=(props)=>{
  return(
    <TouchableOpacity
      style={style.button}
      onPress={()=>{props.onPress(props.title)}}>
        <Text style={style.button_text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
