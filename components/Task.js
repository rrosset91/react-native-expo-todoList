import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    opacity: 0.4,
    borderRadius: 5,
  },
  itemText: {
    marginLeft: 20,
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: 'red',
    opacity: 0.4,
    borderWidth: 2,
    borderRadius: 5,
  },
})
export default Task
