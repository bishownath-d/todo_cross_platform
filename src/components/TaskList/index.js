import { Pressable, ScrollView, Text, View } from "react-native";
import TaskItem from "./TaskItem";
import { styles } from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TaskList({ tasks, onChangeStatus, onDeleteTaskItemHandler, onSaveUpdateField }) {

    return (
        <>
            <View style={styles.container}>
                <ScrollView>

                    {tasks.map((task, index) => {
                        return (
                            <TaskItem
                                key={index}
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                status={task.status}
                                onChangeStatus={onChangeStatus}
                                onDeleteTaskItemHandler={onDeleteTaskItemHandler}
                                onSaveUpdateField={onSaveUpdateField}
                            />
                        )
                    })}

                </ScrollView>
            </View>
        </>
    )
}