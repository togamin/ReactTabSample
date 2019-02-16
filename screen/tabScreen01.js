import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class tabScreen01 extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>tabScreen01</Text>
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

export default tabScreen01;