import { Text, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function PostItem({ id, title, description, status, onChangeStatus }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Text style={styles.id}>ID: {id}</Text>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.text}>{description}</Text>
                </View>
                <View style={styles.status}>
                    <BouncyCheckbox
                        isChecked={status}
                        onPress={(value) => onChangeStatus(value, id)}
                        style={[styles.checkbox]}
                    />
                    <Text style={styles.text}>{status ? "Completed" : "Incomplete"}</Text>

                </View>
            </View>
        </View>
    )
}