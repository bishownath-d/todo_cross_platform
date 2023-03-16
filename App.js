//  Please watch the video here
//  https://share.vidyard.com/watch/N3o7crw4rRYH8uyLxU1wBk?

import { StatusBar } from 'expo-status-bar';
import { Alert, Modal, Text, View } from 'react-native';
import styles from './src/styles/structure'
import Header from './src/components/Header'
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import * as SplashScreen from 'expo-splash-screen';
import TaskScreen from './src/screens/TaskScreen';
import FormScreen from './src/screens/FormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { cardColor, formColor, headerBg } from './src/includes/colors';
import TaskCounterScreen from './src/screens/TaskCounterScreen';
import TaskCounter from './src/components/TaskCounter';
import { Provider } from 'react-redux'
import { store } from './src/redux/store.js'
import SettingScreen from './src/screens/SettingScreen';
import { Ionicons } from '@expo/vector-icons';


// this returns promise
SplashScreen.preventAutoHideAsync();

// bottom tab navigator
const Tab = createBottomTabNavigator();


export default function App({ navigation }) {

  useEffect(() => {
    // console.log('Load Database...')
    // Load Database here 

    // hiding splash screen which was prevented to auto hide
    SplashScreen.hideAsync()
  }, [])



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


  const filteredTasks = (id) => {
    const tasks_filtered = tasks.filter((task) => task.id !== id)
    setTasks(tasks_filtered)
  }

  // deleting item from TaskList
  const onDeleteTaskItemHandler = (task, id) => {
    Alert.alert("Delete", `Do you want to delete ${task}?`, [
      {
        text: "Cancel",
        onPress: () => { console.log("Cancel") },
        style: 'destructive'
      },
      {
        text: "OK",
        onPress: () => { filteredTasks(id) }
      }
    ])
    // const tasks_filtered = tasks.filter((task) => task.id !== id)
    // setTasks(tasks_filtered)/
  }

  // // update and save the updated field from modal
  const onSaveUpdateField = (value, id) => {
    const allTasks = tasks.map(
      (task) => {
        if (task.id === id) {
          task.status = value
        }
      })
    setTasks(allTasks)
    // console.log("Status " + updatedTask)
    // console.log("Saved " + id, value)
  }

  const onChangeStatus = (value, id) => {
    const updatedTask =
      tasks.map((task) => {
        if (task.id === id) {
          task.status = value
        }
        return task
      })
    console.log("Status Change: " + value)
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
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container} >

          <StatusBar style="auto" />
          {/* Header */}
          <Header title="To-Do App" author="Bishow" />

          {/* Task Count */}
          <TaskCounter title="Total Tasks " tasks={tasks}></TaskCounter>

          <Tab.Navigator screenOptions={{
            tabBarStyle: {
              backgroundColor: headerBg
            },
            tabBarLabelStyle: {
              color: 'white',
            },
            tabBarActiveTintColor: cardColor
          }}>

            {/* Task Screen */}
            <Tab.Screen
              name="Task"
              options={{
                title: "Task List",
                tabBarIcon:
                  ({ focused, color, size }) => {
                    const icon = focused ? 'file1' : 'filetext1'
                    return (
                      <AntDesign
                        name={icon}
                        size={size}
                        color={color} />
                    )
                  },
                headerShown: false
              }}>
              {(props) => {
                return (
                  <TaskScreen
                    {...props}
                    tasks={tasks}
                    onDeleteTaskItemHandler={onDeleteTaskItemHandler}
                    onChangeStatus={onChangeStatus}
                  />
                )
              }}
            </Tab.Screen>

            {/* formScreen */}
            <Tab.Screen name="Form" options={{
              title: "Add Task",
              headerStyle: {
                backgroundColor: formColor
              },
              headerTintColor: 'white',
              tabBarIcon: ({
                focused,
                color,
                size
              }) => {
                const icon = focused ? 'add-circle-outline' : 'add-circle'
                return <MaterialIcons name={icon} size={size} color={color} />;
              }
            }}>
              {(props) => {
                return (
                  <FormScreen
                    {...props}
                    onAddTask={onAddTask}
                  />
                )
              }}
            </Tab.Screen>

            {/* settings */}
            <Tab.Screen name="Setting" options={{
              title: "Setting",
              headerStyle: {
                backgroundColor: formColor
              },
              headerTintColor: 'white',
              tabBarIcon: ({
                focused,
                color,
                size
              }) => {
                const icon = focused ? 'settings-outline' : 'settings-sharp'
                return <Ionicons name={icon} size={size} color={color} />;
              }
            }}>
              {(props) => {
                return (
                  <SettingScreen

                  />
                )
              }}
            </Tab.Screen>

          </Tab.Navigator>

        </View>
      </NavigationContainer>
    </Provider>
  );
}



