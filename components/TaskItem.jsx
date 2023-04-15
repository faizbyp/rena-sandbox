import {
  Pressable, StyleSheet, Text, View,
} from 'react-native';

function TaskItem({ task, hideTaskHandler }) {
  return (
    <Pressable onPress={() => hideTaskHandler(task.id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{task.value}</Text>
      </View>
    </Pressable>
  );
}

export default TaskItem;

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
