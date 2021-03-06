import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  const handleAddTask = () => {
    dismissKeyboard()
    setTaskItems([...taskItems, task])
    setTask('')
  }
  const completeTask = index => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dismissKeyboard()
      }}
    >
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Larissom Tarefans</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    completeTask(index)
                  }}
                >
                  <Task text={item} />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTextWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={'Write a task...'}
            value={task}
            onChangeText={text => {
              setTask(text)
            }}
          />
          <TouchableOpacity
            onPress={() => {
              handleAddTask()
            }}
          >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTextWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: Platform.OS === 'web' ? '90%' : 300,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
  },
})
