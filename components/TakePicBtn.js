import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export const TakePicBtn = ({action}) => {
  return (
    <TouchableOpacity 
        style={styles.picBtn}
        onPress={action}
    >
        <View style={styles.circle}/>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  picBtn: {
    width:60,
    height:60,
    backgroundColor: 'black',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width:50,
    height:50,
    backgroundColor: 'white',
    borderRadius: 25,
  }
});