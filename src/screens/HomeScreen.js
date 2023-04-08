import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {RFPercentage} from 'react-native-responsive-fontsize'
import {useDispatch} from 'react-redux'
import {DataAction} from './Redux/Action'

const HomeScreen = ({navigation}) => {
  
  const dispatch=useDispatch();
  const [name,setName]=useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your Name</Text>
      <TextInput 
        onChangeText={(name)=>{setName(name)}} 
        style={styles.input} 
        placeholder='Enter your Name'
        />
      <TouchableOpacity 
      activeOpacity={0.5} 
      style={styles.button} 
      onPress={()=>{
        dispatch(DataAction(name))
        navigation.navigate('Detail')
      }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    marginVertical:'5%',
    marginHorizontal:'5%'
  },
  input:{
    borderWidth:1,
    marginVertical:'3%',
    fontSize:RFPercentage(2.5),
    paddingHorizontal:'3%'
  },
  text:{
    fontSize:RFPercentage(3),
    color:'#000',
  },
  button:{
    backgroundColor:'blue',
    width:'100%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontSize:RFPercentage(2.5),
    color:'#fff',
    fontWeight:'800'
  }
})