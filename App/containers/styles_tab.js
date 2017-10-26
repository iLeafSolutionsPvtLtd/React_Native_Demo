import {StyleSheet,Dimensions} from 'react-native';
const {width,height}= Dimensions.get('window');

const styles=StyleSheet.create({
  container:{
    width:width/2+40,
    position:'absolute',
    
    flexDirection:'row'
  },
  modal_container:{
    borderRadius:18,
    backgroundColor:'white',

    paddingBottom:20,
    width:width/2,

  },
  view_row:{
    flexDirection:'row',
    marginTop:15,
    alignItems:'center'
  },
  text_input_comment:{
      marginTop:5,
      textAlignVertical:'top',
      height: 180,
      borderColor: 'gray',
      borderWidth: 1,
      width:width/4-20,
      borderRadius:5,
  },
  triangle: {
    width: 0,
    height: 0,
    alignSelf:'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 16,
    borderRightWidth: 16,
    borderBottomWidth: 32,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    transform: [
      {rotate: '90deg'}
    ]
  }

});

export default styles;
