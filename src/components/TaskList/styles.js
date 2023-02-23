import { StyleSheet } from "react-native";
import { black, customFont, postListBg } from "../../includes/colors"


export const styles = StyleSheet.create({
    container: {
        backgroundColor: postListBg,
    },
    title: {
        color: black,
        textShadowRadius: 15,
        textShadowOffset: { width: -10, height: 10 },
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: customFont,
    },
    addButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        width: 60,
        height: 60,
        padding: 23,
        borderRadius: 30,
        backgroundColor: 'green'
    }
})