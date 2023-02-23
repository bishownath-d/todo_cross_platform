import { Button, Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons';
import { postCounterBg } from "../../includes/colors";
import { useState } from "react";


export default function TaskCounter({ title, tasks }) {

    const totalPost = tasks.length
    const publishedPost = tasks.filter((task) => task.status)
    const unpublishedPost = tasks.filter((task) => !task.status)


    // modal for viewing total task, published and unpublished task
    const [showModal, setShowModal] = useState(false)

    const showModalHandlerInCounter = () => {
        setShowModal(!showModal)
    }

    const tasksCount = tasks.length
    const completedTasks = tasks.filter((task) => task.status)
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.totalTask]}>{title}: {tasksCount}</Text>
            <Entypo.Button name="info-with-circle" size={24} color="black" backgroundColor={postCounterBg} onPress={showModalHandlerInCounter} />

            {/* Modal after clicking I button in TaskCounter */}
            <Modal
                visible={showModal}
                animationType={"fade"}
                transparent={true}
            >
                <View style={styles.containerForModal}>
                    <View style={styles.modal}>
                        <View style={styles.task_info}>
                            <Text style={styles.taskInfoText}>Task Info: </Text>
                            <Pressable onPress={showModalHandlerInCounter}><Text style={styles.hideModal}>X</Text></Pressable>
                        </View>
                        <View style={styles.postInfo}>
                            <Text>Total Post: {totalPost}</Text>
                            <Text>Completed Post: {publishedPost.length}</Text>
                            <Text>Incomplete Post: {unpublishedPost.length}</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* <Text style={[styles.completedTask, styles.text]}>Completed Tasks: {completedTasks.length}</Text> */}
            {/* {completedTasks.length <= 0 && alert("Please Complete At Least 1 Task")} */}
        </View >
    )
}
