import { StyleSheet } from "react-native";
import { customFont, headerBg, orange, textColor } from "../../includes/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        backgroundColor: headerBg
    },
    text: {
        color: textColor,
        marginTop: 2
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: customFont,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    label: {
        fontSize: 20,
        paddingBottom: 10
    },
    inputField: {
        paddingBottom: 20,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#F9F5FF'
    },
    button_Checkbox: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    save: {
        backgroundColor: orange,
        padding: 10,
        borderWidth: 2,
        borderRadius: 8
    },
    errorMessage: {
        color: 'black'
    },
    errorCard: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        fontWeight: 'bold',
        borderColor: 'red',
        borderLeftWidth: 5,
        borderLeftColor: 'red'
    },
    errorMessageCard: {
        borderWidth: 0,
        borderRadius: 2,
        borderLeftColor: 'red',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    error_message: {
        color: 'red',
        fontWeight: 'bold'

    }

})