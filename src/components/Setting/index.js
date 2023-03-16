import { View, Text, Switch } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { styles } from "./styles.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleAllowDelete } from "../../redux/preferenceSlice.js";


export default function Setting() {
    const allowDelete = useSelector((state) => {
        return state.preference.allowDelete
    })

    const dispatch = useDispatch()

    const handleAllowDeleteChange = () => {
        dispatch(toggleAllowDelete())

    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Setting page</Text>
            <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-between" }}>
                <Pressable>
                    <Text>Allow Delete Post</Text>
                </Pressable>
                <Switch value={allowDelete} onValueChange={handleAllowDeleteChange} />
            </View>
        </View>
    )
}