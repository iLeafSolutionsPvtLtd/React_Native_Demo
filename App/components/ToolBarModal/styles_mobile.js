import {StyleSheet,Dimensions} from 'react-native';
const {height,width} =Dimensions.get('window');
const styles=StyleSheet.create({
  toolbar:{
    backgroundColor:'#00cfbb',
    height:30,
    width:width-20,
    borderTopLeftRadius:18,
    borderTopRightRadius:18,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:'white',
    fontSize:15
  }
});

export default styles;
