import React from 'react';
import {View,Text,Dimensions} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import style from './style';
const {width,height}= Dimensions.get('window');
import  {isTablet} from '../../lib/DeviceType';

const ModalDropdownComponent=(props)=>{
  return(
    <View style={style.container}>
      <Text style={style.text}>{props.title}</Text>
      <ModalDropdown

        adjustFrame={style=>_dropdown_adjust(style)}
        options={['option 1', 'option 2']}
        onSelect={(idx,value)=>{props.select(idx,value)}}>
        <View style={{alignItems:'center',justifyContent:'center',height:40,borderWidth:1,borderRadius:5,borderColor:'black'}}>
          <Text>{props.selectedValue||'Select'}</Text>
        </View>
      </ModalDropdown>
    </View>
  );
}
_dropdown_adjust=(style)=>{
  const DROPDOWN_WIDTH=isTablet?width/4:width/2-20
  style.width = DROPDOWN_WIDTH;
  return style;
}
export default ModalDropdownComponent
