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
    },
    task_info: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    containerForModal: {
        borderRadius: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 40,
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    modal: {
        borderRadius: 15,
        backgroundColor: 'aqua',
        shadowColor: 'black',
        elevation: 5,
        shadowRadius: 20,
        backgroundColor: 'white',
        shadowOpacity: 0.85,
        shadowOffset: {
            width: 10,
            height: 5
        }
    },
    postInfo: {
        elevation: 5,
        padding: 20,
        shadowColor: 'red',
    },
    hideModal: {
        color: 'red',
        fontSize: 20
    },
    taskInfoText: {
        fontSize: 30,
        fontFamily: 'Cochin',
        padding: 20,
        textAlign: 'center'
    },
})