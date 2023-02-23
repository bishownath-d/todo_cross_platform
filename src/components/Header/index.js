import { Modal, Platform, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import Form from "./../Form"


export default function Header({ title, author }) {
    return (
        <View style={styles.container}>
            <AntDesign.Button name="bars" size={24} style={[styles.text, styles.buttonBG]} onPress={() => console.log("Pressed")} />
            <Text style={[styles.text, styles.title]}>{title}</Text>
            <View>

                <Text style={styles.text}>By {author}</Text>
                <Text style={[styles.text, styles.tagline]}>{Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
            </View>

            {/* <Modal>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Form />
                    </View>
                </View>
            </Modal> */}

        </View>
    )
}