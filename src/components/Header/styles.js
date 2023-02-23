import { StyleSheet } from "react-native";
import { customFont, formColor, headerBg, postCounterBg, textColor } from "../../includes/colors";


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
    modalContainer: {
        paddingTop: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: postCounterBg
    },
    modalView: {
        width: "80%",
    },
    buttonBG: {
        backgroundColor: headerBg
    }
})