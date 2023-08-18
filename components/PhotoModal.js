import React from 'react'
import { Image, Modal, StyleSheet } from 'react-native'

export const PhotoModal = ({image, action}) => {
  return (
    <Modal
        visible={!!image}
        animationType="slide"
        transparent={true}
        onRequestClose={action}
    >
        {image && <Image source={{uri: image}} style={styles.image}/> }
    </Modal>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});