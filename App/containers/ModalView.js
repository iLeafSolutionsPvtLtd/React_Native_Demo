import React, { Component } from 'react';
import DownTimeModal from '../components/DownTimeModal';
import {
  View,
  Dimensions
} from 'react-native';
import style from './styles';
import ToolBarModal from '../components/ToolBarModal';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import ModalDropdown from '../components/ModalDropDown';

const {width,height}= Dimensions.get('window');

class ModalView extends Component{

  constructor(){
    super();
    this.state={
      modal_values:{
        hour:'',
        mins:'',
        comments:'',
        reason:null,
        sub_reason:null,
      }
    }

  }

  render(){
    return(
      <DownTimeModal>
        <View style={style.container}>
          <View style={style.modal_container}>
            <ToolBarModal title="DownTime"/>
            <View style={style.view_row}>
              <View style={{flex:1,}}>
                <View style={style.view_row}>
                  {this.renderTextView('hour','Hours')}
                  {this.renderTextView('mins','Mins')}
                </View>
                {this.renderModalDropDown('reason','DownTime Reason')}
                {this.renderModalDropDown('sub_reason','DownTime Sub Reason')}
              </View>
              <View style={{flex:1}}>
                {this.renderTextView('comments','Comments',true,style.text_input_comment)}
              </View>
            </View>
            <View style={[style.view_row],{justifyContent:'center',flexDirection:'row'}}>
              <Button title='Save' onPress={this.onSave}/>
              <Button title='Reset' onPress={this.onReset}/>
              <Button title='Cancel' onPress={this.onCancel}/>
            </View>
          </View>
          <View style={style.triangle}/>
        </View>
      </DownTimeModal>
    );
  }

  renderModalDropDown=(type,label)=>{
    return(
      <ModalDropdown
        title={label}
        selectedValue={this.state.modal_values[type]}
        select={(idx,value)=>{this.onChangeText(type,value,idx)}}/>
    );
  }

  renderTextView=(type,label,multiline,style)=>{
    return(
      <TextInput
        title={label}
        multiline={multiline}
        style={style}
        onChangeText={(text)=>{this.onChangeText(type,text)}}/>
    );
  }

  onChangeText= (type,value) =>{
    let modal_values={...this.state.modal_values,[type]:value};
    this.setState({modal_values})
  }

  onSave = (value) => {
    console.log("VALUE: ",value);
  }

  onCancel = (value) => {
    console.log("VALUE: ",value);
  }

  onReset = (value) => {
    console.log("VALUE: ",value);
  }
}

export default ModalView
