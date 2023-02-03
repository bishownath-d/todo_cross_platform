import { ScrollView, Text, View } from "react-native";
import TaskItem from "./TaskItem";
import { styles } from "./styles";

export default function TaskList({ tasks, onChangeStatus }) {
    return (
        <View style={styles.container}>
            <ScrollView stickyHeaderHiddenOnScroll={true}>
                <Text style={styles.title}>TASK LIST</Text>

                {tasks.map((task, index) => {
                    return (
                        <TaskItem
                            key={index}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                            onChangeStatus={onChangeStatus}
                        />
                    )
                })}

            </ScrollView>
        </View>
    )
}