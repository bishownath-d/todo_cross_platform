import Form from "../../components/Form"


export default function FormScreen({ navigation, route, onAddTask }) {
    const goBackToList = () => {
        navigation.goBackToList()
    }

    return (
        <>
            <Form
                onAddTask={onAddTask}
                navigation={navigation}
            />
        </>

    )
}