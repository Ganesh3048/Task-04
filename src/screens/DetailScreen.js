import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import {RFPercentage} from 'react-native-responsive-fontsize'

const DetailScreen = (props) => {
  console.log(props)
  const name=useSelector((state)=>state.result)
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome: {name}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:RFPercentage(4),
    color:'#000'
  }
})