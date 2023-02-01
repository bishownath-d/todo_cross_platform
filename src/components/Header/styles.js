import { StyleSheet } from "react-native";
import { customFont, headerBg, textColor } from "../../includes/colors";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: headerBg,
        padding: 10
    },
    text: {
        color: textColor,
    },
    title: {
        fontSize: 30,
        fontFamily: customFont,
        textAlign: "center"
    },
})