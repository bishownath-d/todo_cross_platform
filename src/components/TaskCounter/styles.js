import { StyleSheet } from "react-native";
import { customFont, postCounterBg } from "../../includes/colors"


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: postCounterBg
    },
    text: {

        textAlign: 'center',
        fontFamily: customFont,
        fontSize: 20
    },
    totalTask: {
        color: 'white',
        fontWeight: 'bold'
    },
    completedTask: {
        color: 'black',
        fontWeight: 'bold'
    }
})