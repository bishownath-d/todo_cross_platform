import { StyleSheet } from "react-native";
import { headerBg } from "../includes/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 50,
    },
    postlist: {
        flex: 1,
        alignContent: 'space-around',
        backgroundColor: 'aqua'

    },
    formcontent: {
        flex: 1,
        alignContent: 'space-around',
        backgroundColor: headerBg
    }
})