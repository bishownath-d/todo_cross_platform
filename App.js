//  Please watch the video here
//  https://share.vidyard.com/watch/N3o7crw4rRYH8uyLxU1wBk?

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './src/styles/structure'
import Header from './src/components/Header'
import TaskCounter from './src/components/TaskCounter';
import TaskList from './src/components/TaskList';
import Form from './src/components/Form';
import { useState } from 'react';
import uuid from 'react-uuid';

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Task 1",
      description: "Desc 1",
      status: false
    },
    {
      id: uuid(),
      title: "Task 2",
      description: "Desc 2",
      status: true
    },
    {
      id: uuid(),
      title: "Task 3",
      description: "Desc 3",
      status: true
    },
  ])

  const onChangeStatus = (value, id) => {
    const updatedTask =
      tasks.map((task) => {
        if (task.id === id) {
          task.status = value
        }
        return task
      })
    setTasks(updatedTask)
  }

  const onAddTask = (title, description, status) => {
    console.log('Click Me')

    const newTask = {
      id: uuid(),
      title: title,
      description: description,
      status: status
    }

    const latestTask = [...tasks, newTask]
    setTasks(latestTask)

  }

  return (

    <View style={styles.container} >

      <StatusBar style="auto" />
      {/* Header */}
      <Header title="To-Do App" author="Bishow" />
      {/* Total Post Counter Tracking */}
      <TaskCounter title="Total Tasks" tasks={tasks} />

      {/* Post List Container For Post Items */}
      <View style={styles.postlist}>
        <TaskList title="Task List" tasks={tasks} onChangeStatus={onChangeStatus} />
      </View>

      {/* Form Page */}
      <View style={styles.formcontent}>
        <Form title="Form" onAddTask={onAddTask} onChangeStatus={onChangeStatus} />
      </View>

    </View >
  );
}



