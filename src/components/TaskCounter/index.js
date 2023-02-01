import { Text, View } from "react-native";
import { styles } from "./styles";


export default function TaskCounter({ title, tasks }) {
    const tasksCount = tasks.length
    const completedTasks = tasks.filter((task) => task.status)
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.totalTask]}>{title}: {tasksCount}</Text>
            <Text style={[styles.completedTask, styles.text]}>Completed Tasks: {completedTasks.length}</Text>
            {completedTasks.length <= 0 && alert("Please Complete At Least 1 Task")}
        </View>
    )
}
