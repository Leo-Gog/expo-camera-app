import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export const ChangeCamBtn = ({action}) => {
  return (
    <TouchableOpacity
        style={styles.switchBtn}
        onPress={action}
    >
        <Ionicons name="sync" size={35} color="white" />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    switchBtn: {
        marginLeft:50,
        marginTop:12,
        backgroundColor: '#444444',
        height:40,
        width:40,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });