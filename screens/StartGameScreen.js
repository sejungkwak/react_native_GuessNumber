import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={ styles.inputContainer }>
            <TextInput style={ styles.numberInput } maxLength={ 2 } />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    numberInput: {
        width: 60,
        height: 60,
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ddb52f',
    }
})