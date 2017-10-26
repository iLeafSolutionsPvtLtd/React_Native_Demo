import React, { Component } from 'react';
import {Modal} from 'react-native';
import PropTypes from 'prop-types';

const DownTimeModal=(props)=>{
  return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
        {props.children}
    </Modal>
  );
}

DownTimeModal.propTypes={

}
export default DownTimeModal;
