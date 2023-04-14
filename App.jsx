import { StyleSheet, Text, SafeAreaView, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder='input your task' style={styles.textInput} />
        <Button title='Add' style={styles.btn} />
      </View>
      <View style={styles.listContainer}>
        <Text>List of task</Text>
      </View>
    </SafeAreaView>
  );
}

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
    color: 'gray'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 4,
    width: '70%',
    marginEnd: 4
  },
  listContainer: {
    flex: 5,
  }
});
