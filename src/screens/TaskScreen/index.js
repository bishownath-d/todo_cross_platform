import { Text, View } from "react-native"
import TaskList from "../../components/TaskList"


export default function TaskScreen({ navigation, tasks, filteredTasks, onDeleteTaskItemHandler, onChangeStatus, onSaveUpdateField, onAddTask }) {

    return (
        <View>
            {/* <Task */}
            <TaskList
                tasks={tasks}
                filteredTasks={filteredTasks}
                onDeleteTaskItemHandler={onDeleteTaskItemHandler}
                onChangeStatus={onChangeStatus}
                onAddTask={onAddTask}
            />
            {tasks.length < 1 && (
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'Cochin',
                            textAlign: 'center',
                            paddingTop: 20
                        }}
                    >
                        No Task !!! Please create new task by navigating to form page.
                    </Text>
                </View>
            )}
        </View>
    )
}