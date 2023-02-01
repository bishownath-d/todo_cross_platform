import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";



export default function Form({ onAddTask }) {

    const [title, setTitle] = useState('')

    const [description, setDescription] = useState('')

    const [status, setStatus] = useState(false)

    const [errorMessage, setErrorMessage] = useState([])


    const validate = []
    const validateData = () => {

        if (title === '') {
            validate.push('Title is required')
        }

        if (description === '') {
            validate.push('Description is required')
        }

        if (validate.length > 0) {
            setErrorMessage(validate)
        }
        else {
            onAddTask(title, description, status)

            console.log("Status: ", status)

            setTitle('')
            setDescription('')
            setStatus(false)

            // console.log("Set Status", setStatus)


            setErrorMessage([])
        }
    }

    return (
        <View style={styles.container}>
            <Text
                style={[styles.title, styles.text]}
            >
                Task Form
            </Text>
            {errorMessage.length > 0 &&
                <View style={styles.errorCard}>
                    {errorMessage.map((message, index) => {
                        return (
                            <View
                                style={styles.errorMessageCard}>
                                <Text
                                    key={index}
                                    style={styles.error_message}
                                >
                                    {message} !!
                                </Text>
                            </View>
                        )
                    })}
                </View>
            }

            <Text
                style={styles.text}
            >
                Title
            </Text>
            <TextInput
                style={[styles.inputField, styles.text]}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter Title"
            >
            </TextInput>

            <Text
                style={styles.text}
            >
                Description
            </Text>
            <TextInput
                placeholder="Enter Description"
                style={[styles.inputField, styles.text]}
                value={description}
                onChangeText={setDescription}
            >
            </TextInput>
            <View
                style={styles.button_Checkbox}
            >
                <View>
                    {/* <BouncyCheckbox
                        isChecked={status}
                        onPress={() => setStatus(!status)}
                        value={status}
                    /> */}
                    <BouncyCheckbox
                        isChecked={false}
                        value={setStatus}
                        onPress={setStatus}
                    />
                    <Text
                        style={styles.text}
                    >
                        {status ? 'Complete' : 'Incomplete'}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={validateData}
                >
                    <Text
                        style={[styles.text, styles.save]}
                    >
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}