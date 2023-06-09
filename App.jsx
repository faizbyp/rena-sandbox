/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import {
  StyleSheet, Text, SafeAreaView, View, Button, TextInput, FlatList,
} from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  function taskInputHandler(input) {
    setText(input);
  }

  function addTaskHandler() {
    if (text) {
      setTasks((currentTasks) => [...currentTasks, { value: text, id: Math.random().toString() }]);
      setText('');
    }
  }

  function hideTaskHandler(id) {
    console.log(id);
    // setTasks((currentTasks) => {
    //   currentTasks.filter((task) => task.id !== id);
    // });
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="input your task"
          style={styles.textInput}
          onChangeText={taskInputHandler}
          value={text}
        />
        <Button title="Add" style={styles.btn} onPress={addTaskHandler} />
      </View>
      <View style={styles.listContainer}>
        <Text>List of task</Text>
        <FlatList
          data={tasks}
          renderItem={(itemData) => (
            <TaskItem task={itemData.item} hideTaskHandler={hideTaskHandler} />
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

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
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
});
