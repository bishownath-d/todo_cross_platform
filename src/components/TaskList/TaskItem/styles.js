import { StyleSheet } from "react-native";
import { cardColor, orange, textColor } from "../../../includes/colors";


export const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    id: {
        fontSize: 10,
        color: '#fff'
    },
    text: {
        color: textColor,
        fontSize: 15
    },
    card: {
        backgroundColor: cardColor,
        padding: 20,
        borderRightColor: orange,
        borderRightWidth: 10,
        borderLeftColor: orange,
        borderLeftWidth: 10,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        padding: 10
    },
    status: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    }
})