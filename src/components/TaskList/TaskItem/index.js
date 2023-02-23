import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { cardColor } from "../../../includes/colors";
import { useState } from "react";


export default function PostItem({ id, title, description, status, onChangeStatus, onDeleteTaskItemHandler, onSaveUpdateField }) {
    const [showModal, setShowModal] = useState(false)
    const [isComplete, setIsComplete] = useState(status)
    const closeModal = () => {
        setShowModal(!showModal)
    }



    const changeStatusFunction = (value) => {
        setIsComplete(!status)
        onChangeStatus(value, id)
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Text style={styles.id}>ID: {id}</Text>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.text}>{description}</Text>

                    <View style={styles.status}>
                        <View style={styles.isComplete}>

                            <Text style={styles.text}>{status ? "Completed" : "Incomplete"}</Text>
                        </View>
                        <View style={styles.buttonGroup}>
                            <MaterialIcons.Button name="delete-outline" size={24} color="red" style={styles.deleteMI} onPressIn={() => onDeleteTaskItemHandler(title, id)} />
                            <AntDesign.Button name="edit" size={24} color="green" backgroundColor={cardColor} onPress={closeModal} />
                        </View>
                    </View>
                </View>

            </View>
            <Modal
                visible={showModal}
                animationType={"slide"}
                transparent={true}
            >
                <View style={styles.containerModal}>
                    <View style={styles.modalGroup}>
                        <View style={styles.titleModal}>
                            <Text style={styles.title}>Update Field</Text>
                            <Pressable
                                onPress={closeModal}>
                                <Text>X</Text>
                            </Pressable>
                        </View>

                        <View style={styles.fields_buttons}>
                            <Text style={{ paddingBottom: 10 }}><Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Title:</Text> {title}</Text>
                            <Text style={{ paddingBottom: 20 }}><Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Description:</Text> {description}</Text>
                            <View style={styles.checkbox_saveButton}>
                                <View>
                                    <BouncyCheckbox
                                        isChecked={status}
                                        onPress={(value) => changeStatusFunction(value, id)}
                                        style={[styles.checkbox]}
                                    />
                                    <Text>{status ? "Completed" : "Incomplete"}</Text>
                                </View>
                                {/* <Pressable
                                    style={styles.saveButton}
                                    onPress={closeModal}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                        }}
                                    >
                                        Save
                                    </Text>
                                </Pressable> */}
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>

        </View >
    )
}