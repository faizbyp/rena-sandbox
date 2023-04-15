/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import {
  StyleSheet, Text, SafeAreaView, View, Button, TextInput, FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 24,
  },
  heading: {
    paddingVertical: 16,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'gray',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 4,
    width: '70%',
    marginEnd: 4,
  },
  listContainer: {
    flex: 5,
  },
  taskItem: {
    margin: 6,
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  taskText: {
    color: 'white',
  },
});

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  function taskInputHandler(input) {
    setText(input);
  }

  function addTaskHandler() {
    setTasks((currentTasks) => [...currentTasks, { task: text, id: Math.random().toString() }]);
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="input your task" style={styles.textInput} onChangeText={taskInputHandler} />
        <Button title="Add" style={styles.btn} onPress={addTaskHandler} />
      </View>
      <View style={styles.listContainer}>
        <Text>List of task</Text>
        <FlatList
          data={tasks}
          renderItem={(itemData) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{itemData.item.task}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
        {/* <ScrollView alwaysBounceVertical={false}>
          {tasks.map((task) => (
            <View key={task} style={styles.taskItem}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
            ))}
          </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}
