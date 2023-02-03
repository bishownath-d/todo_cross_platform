import { Platform, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";


export default function Header({ title, author }) {
    return (
        <View style={styles.container}>
            <AntDesign.Button name="bars" size={24} style={[styles.text, styles.buttonBG]} onPress={() => console.log("Pressed")} />
            <Text style={[styles.text, styles.title]}>{title}</Text>
            <View>

                <Text style={styles.text}>By {author}</Text>
                <Text style={[styles.text, styles.tagline]}>{Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
            </View>

        </View>
    )
}