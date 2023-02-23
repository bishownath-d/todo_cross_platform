import { Text, View } from "react-native";
import TaskCounter from './../../components/TaskCounter'


export default function TaskCounterScreen({ tasks }) {

    return (
        <View>
            <TaskCounter tasks={tasks} />
        </View>
    )

}