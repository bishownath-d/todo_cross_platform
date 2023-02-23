import { StyleSheet } from "react-native";
import { headerBg, postListBg } from "../includes/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: postListBg,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 50,
    },
    postlist: {
        flex: 1,
        alignContent: 'space-around',
        backgroundColor: 'white'
    },
    formcontent: {
        flex: 1,
        alignContent: 'space-around',
        backgroundColor: headerBg
    }
})