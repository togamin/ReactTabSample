import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class tabScreen02 extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>tabScreen02</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:18,
  },
});

export default tabScreen02;