import {StyleSheet,Dimensions} from 'react-native';
const {width,height}= Dimensions.get('window');

const styles=StyleSheet.create({

  container:{
    width,
    alignItems:'center',
    justifyContent:'center'
  },
  modal_container:{
    borderRadius:18,
    backgroundColor:'white',

    paddingBottom:20,
    width:width-20,

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
      width:width/2-30,
      borderRadius:5,
  }
});

export default styles;
