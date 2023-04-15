/* eslint-disable react/prop-types */
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
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

function TaskItem({ task }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
}

export default TaskItem;
