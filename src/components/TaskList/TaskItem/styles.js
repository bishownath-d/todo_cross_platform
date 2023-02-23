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
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    content: {
        padding: 10
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'space-between'

    },
    isComplete: {
        flexDirection: 'column',
        paddingTop: 10
        // alignItems: ''
    },
    deleteMI: {
        padding: 3,
        color: 'red',
        backgroundColor: cardColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    containerModal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    modalGroup: {
        padding: 20,
        backgroundColor: 'white',
        width: "80%",
        borderRadius: 15,
    },
    titleModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Cochin'
    },
    title: {
        fontFamily: "Cochin",
        fontSize: 30,
    },
    fields_buttons: {
        padding: 20
    },
    checkbox_saveButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    saveButton: {
        backgroundColor: 'orange',
        borderRadius: 8,
        padding: 10,

    },
})